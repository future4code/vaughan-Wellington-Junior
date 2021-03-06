import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import useProtectedPage from "../../Hooks/useProtectedPage"
import { BASE_URL } from "../../routes/BASE_URL"
import { goToPost } from "../../routes/coordinator"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import Loading from "../../components/Loading/Loading"
import CircularProgress from '@material-ui/core/CircularProgress'

const FeedBody = styled.div`
display: flex;
background-color: #FFFFFF;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: sans-serif;
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    >div>button{
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: 20px;
        padding: 8px;
        border-radius: 18px;
        width: 41%;
        color: white;
        border: none;
        background-color: rgb(0, 121, 211);
        font-size: 15px;        
    }
    >div>button:hover{
        background-color: rgb(0, 141, 211);
    }
`
const CardBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 600px;
margin: 10px;
border: 1px solid rgba(0,0,0,.1);
border-radius: 8px;
padding: 5px;
`
const CardUser = styled.div`
display: flex;
cursor: pointer;
justify-content: space-between;
align-items: center;
min-width: 100%;
height: 40px;
margin-bottom: -23px;
padding: 1px;
    >p{
        cursor: pointer;
        margin-left: 10px;
        color: gray;
        word-break: break-word;
        font-style: italic;
        font-size: 13px;
    }
    >p:hover{
        transition: 200ms;
        color: black;
    }
`
const CardText = styled.div`
display: flex;
flex-direction: column;
padding: 15px 0px;
width: 100%;
    >h3{
        word-break: break-word;
        text-align: left;
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 18px;
    }
    >p{
        margin: 10px;
        word-break: break-word;
        text-align: left;
    }

`
const CardNumbers = styled.div`
display: flex;
justify-content: left;
align-items: center;
width: 100%;
font-size: 13px;
    >p{
        cursor: pointer;
        margin-left: 15px;
        color: gray;
    }
    >p:hover{
        transition: 200ms;
        color: black;
    }
    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12%;
        margin-left: 10px;
    }
    >div>button{
        cursor: pointer;
        border: none;
        background-color: transparent;
        border-radius:20px;
        padding: 1px;
    }
    >div>button:hover{
        transition: 200ms;
        background-color: rgba(0,0,0,.1);        
    }
`
const PostBody = styled.form`
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    padding: 7px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    min-width: 600px;
    flex-direction: column;
    align-items: center;
    >p{
        font-weight: bolder;
        margin: 8px;
    }
    >input{
        margin-top: 10px;
        width: 90%;
        padding: 8px; 
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 8px;
    }

    >button{
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: 8px;
        padding: 8px;
        border-radius: 18px;
        width: 94%;
        color: white;
        border: none;
        background-color: rgb(0, 121, 211);
        font-size: 15px;        
    }
    >button:hover{
        background-color: rgb(0, 141, 211);
    }
`

const FeedPage = () => {

    useProtectedPage()    

    const [page] = useState(1)

    const [size, setSize] = useState(10)

    const [posts, setPosts] = useState([])
    
    const [isLoading, setIsLoading] = useState( false )

    useEffect(()=>{
        getPosts()
    },[page, size])
        
    const increasePageSize = (event) => {
        setSize(size +10)
    }

    async function getPosts () { 
        axios.get(`${BASE_URL}/posts?page=${page}&size=${size}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        setPosts(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    }
    
    const history = useNavigate()

    const onClickCard = (id) => {
        goToPost(history, id)
    }

    const posVote = 1

    const negVote = -1

    const voteButton = (id, value,  idVote) => {
        
        if (idVote !== null) {

            deletePostVote(id)
            
        } else {

            toVote (id, value)
        }
    }        
       
    const toVote = (id, value) => {
        
        const body = {
              direction: value,
        };
        
        axios
            .post(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                  Authorization: localStorage.getItem('token') ,
                },
            })
            .then(
                getPosts()
            )
            .catch((err) => {console.log(err.response)})
        }     

      const deletePostVote = (id) => {
        axios
          .delete(`${BASE_URL}/posts/${id}/votes`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then(
              getPosts()
              )
          .catch((err) => {console.log(err.response)});
      }

      const selectedColorVoteLike = (vote) => {
        if (vote < 0 || vote === null) {
          return <TiArrowUpThick style={{color: 'gray', fontSize: '20px'}}/>
        } else {
          return <TiArrowUpThick style={{color: 'green', fontSize: '20px'}}/>
        }
      };

      const selectedColorVoteDislike = (vote) => {
        if (vote > 0 || vote === null) {
          return <TiArrowDownThick style={{color: 'gray', fontSize: '20px'}}/>
        } else {
          return <TiArrowDownThick style={{color: 'red', fontSize: '20px'}}/>
        }
      };

       const postCards = posts.map((post) => {
        return  <CardBody key={post.id}>
        <CardUser onClick={() => onClickCard(post.id)}>
            <p>por u/{post.username}</p>
        </CardUser>        
        <CardText>
            <h3>{post.title}</h3>            
            <p>{post.body}</p>            
        </CardText>
        <CardNumbers>
            <div>
                <button onClick={() => voteButton(post.id, posVote, post.userVote)}> 
                {selectedColorVoteLike(post.userVote)}
                </button>

                <p>{post.voteSum === null ? 0 : post.voteSum}</p>
                
                <button onClick={() => voteButton(post.id, negVote, post.userVote)}> 
                {selectedColorVoteDislike(post.userVote)}
                </button>               
            </div>
                <p onClick={() => onClickCard(post.id)}>{post.commentCount === null ? 'Nenhum Coment??rio' : `${post.commentCount} Coment??rios`}</p>
        </CardNumbers>
    </CardBody>
    })

    const [form, onChange, clear] = useForm({ title: "", body: "" })    

    const createPost = () => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Publica????o postada com sucesso!")
            getPosts()
            clear()
            setIsLoading(false)
        })
        .catch((err)=>{            
            console.log(err.data.response)
            setIsLoading(false)
            alert("Houve um erro na publica????o, tente novamente")})
    }

    const onSubmitForm = (event) =>{
        event.preventDefault()
        createPost()
    }

    return (
        <FeedBody>{ posts != 0 ?
            <div>
                <PostBody onSubmit={onSubmitForm}>
                    <p>Fa??a uma publica????o</p>
                    <input 
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    placeholder={"T??tulo"}
                    required
                    />

                    <input
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    placeholder={"Texto"}
                    required
                    />

                    <button 
                    type={"submit"}>{isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Postar"}</button>
                </PostBody>

                {postCards}

                <button onClick={increasePageSize}>CARREGAR MAIS</button>

            </div> : <Loading/>}
        </FeedBody>
    )
}

export default FeedPage