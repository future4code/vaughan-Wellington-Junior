import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import useProtectedPage from "../../Hooks/useProtectedPage"
import { BASE_URL } from "../../routes/BASE_URL"
import { goToPost } from "../../routes/coordinator"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

const FeedBody = styled.div`
display: flex;
background-color: #FFFFFF;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: sans-serif;
    >button{
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
    >button:hover{
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

    useEffect(()=>{
        getPosts()
    },[size])    
    
    const increasePageSize = (event) => {
        console.log("aumentou")
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

    const votePositive = (id, idVote) => {
        
        if (idVote !== null) {

            deletePostVote(id)
            
        } else {
        
        const body = {
          direction: 1,
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
        }}

    const voteNegative = (id, idVote) => {

        if (idVote !== null) {

            deletePostVote(id)

        } else {
        
            const body = {
              direction: -1,
            };
        
            axios
              .post(`${BASE_URL}/posts/${id}/votes`, body, {
                headers: {
                  Authorization: localStorage.getItem('token') ,
                },
                })
                .then(() => {
                    getPosts()
                })
                .catch((err) => {console.log(err.response)})
            }}    

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
                <button onClick={() => votePositive(post.id, post.userVote)}> 
                {selectedColorVoteLike(post.userVote)}
                </button>

                <p>{post.voteSum === null ? 0 : post.voteSum}</p>
                
                <button onClick={() => voteNegative(post.id, post.userVote)}> 
                {selectedColorVoteDislike(post.userVote)}
                </button>               
            </div>
                <p onClick={() => onClickCard(post.id)}>{post.commentCount === null ? 'Nenhum Comentário' : `${post.commentCount} Comentários`}</p>
        </CardNumbers>
    </CardBody>
    })

    const [form, onChange, clear] = useForm({ title: "", body: "" })    

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert(res.data.message)
            getPosts()
            clear()
        })
        .catch((err)=>alert(err.response.data.message))
    }

    const onSubmitForm = (event) =>{
        event.preventDefault()
        createPost()
    }

    return (
        <FeedBody>
            <PostBody onSubmit={onSubmitForm}>
                <p>Faça uma publicação</p>
                <input 
                name={"title"}
                value={form.title}
                onChange={onChange}
                placeholder={"Título"}
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
                type={"submit"}>Postar</button>
            </PostBody>

            {postCards}

            <button onClick={increasePageSize}>CARREGAR MAIS</button>

        </FeedBody>
    )
}

export default FeedPage