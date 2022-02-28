import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import useProtectedPage from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/UseRequestData"
import { BASE_URL } from "../../routes/BASE_URL"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

const FeedBody = styled.div`
display: flex;
background-color: #FFFFFF;
min-height: 94vh;
flex-direction: column;
align-items: center;
font-family: sans-serif;
    >button{
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: 20px;
        padding: 8px;
        border-radius: 18px;
        width: 600px;
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
width: 100%;
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

const CommentBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 600px;;
margin: 10px;
border: 1px solid rgba(0,0,0,.1);
border-radius: 8px;
padding: 5px;
`
const CommentUser = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
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
`

const CommentText = styled.div`
display: flex;
flex-direction: column;
padding: 15px 0px;
width: 100%;
    >p{
        margin: 10px;
        word-break: break-word;
        text-align: left;
    }

`
const CommentNumbers = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 30px;
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
    width: 600px;
    flex-direction: column;
    align-items: center;
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

const PostPage = () => {
    useProtectedPage()

    const [post, setPost] = useState([])

    const [comments, setComments] = useState([])

    useEffect(()=>{
        getPost()
        getComments()
    },[])

    const params = useParams()

    const postId = params.id

    async function getPost () { 
        axios.get(`${BASE_URL}/posts?page=${page}&size=${size}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        setPost(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    }

    const choosenPost = post.filter((item) => {
        return item.id === postId
    })

    const postVote = "posts"

    const commVote = "comments"

    const votePositive = (id, type, idVote) => {
        
        if (idVote !== null) {

            deletePostVote(id, type)
            
        } else {
        
        const body = {
          direction: 1,
        };
    
        axios
          .post(`${BASE_URL}/${type}/${id}/votes`, body, {
            headers: {
              Authorization: localStorage.getItem('token') ,
            },
            })
            .then(
                getPost(),
                getComments()
            )            
            .catch((err) => {console.log(err.response)})
        }}

    const voteNegative = (id, type, idVote) => {

        if (idVote !== null) {

            deletePostVote(id, type)

        } else {
        
            const body = {
              direction: -1,
            };
        
            axios
              .post(`${BASE_URL}/${type}/${id}/votes`, body, {
                headers: {
                  Authorization: localStorage.getItem('token') ,
                },
                })
                .then(
                    getPost(),
                    getComments()
                )
                .catch((err) => {console.log(err.response)})
            }}    

      const deletePostVote = (id, type) => {
        axios
          .delete(`${BASE_URL}/${type}/${id}/votes`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
          .then(
              getPost(),
              getComments()
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

    const postCard = choosenPost.map((post) => {
        return  <CardBody key={post.id}>
        <CardUser>
            <p>por u/{post.username}</p>
        </CardUser>        
        <CardText>
            <h3>{post.title}</h3>
            <p>{post.body}</p>            
        </CardText>
        <CardNumbers>
            <div>
                <button onClick={() => votePositive(post.id, postVote, post.userVote)}>
                    {selectedColorVoteLike(post.userVote)}</button>

                <p>{post.voteSum === null ? 0 : post.voteSum}</p>

                <button onClick={() => voteNegative(post.id, postVote, post.userVote)}>
                    {selectedColorVoteDislike(post.userVote)}</button>               
            </div>
                <p>{post.commentCount === null ? 'Nenhum Comentário' : `${post.commentCount} Comentários`}</p>
        </CardNumbers>
    </CardBody>
    })

    const [page] = useState(1)

    const [size, setSize] = useState(10)

    async function getComments () { 
        axios.get(`${BASE_URL}/posts/${postId}/comments?page=${page}&size=${size}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        setComments(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    }


    const loadMoreComments = (event) => {
        setSize(size +10)
    }

    const commentCard = comments.map((item) => {
        return <CommentBody key={item.id}>
        <CommentUser>
            <p>por u/{item.username}</p>
        </CommentUser>        
        <CommentText>
            <p>{item.body}</p>            
        </CommentText>
        <CommentNumbers>
            <div>
                <button onClick={() => votePositive(item.id, commVote, item.userVote)}>
                    {selectedColorVoteLike(item.userVote)}</button>

                <p>{item.voteSum === null ? 0 : item.voteSum}</p>
                
                <button onClick={() => voteNegative(item.id, commVote, item.userVote)}>
                    {selectedColorVoteDislike(item.userVote)}</button>               
            </div>

        </CommentNumbers>
    </CommentBody>
    })

    const [form, onChange, clear] = useForm({ body: "" })    

    const createComment = () => {
        axios.post(`${BASE_URL}/posts/${postId}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert(res.data.message)
            getComments()
            clear()
        })
        .catch((err)=>alert(err.response.data.message))
    }

    const onSubmitForm = (event) =>{
        event.preventDefault()
        createComment()
    }

    return (
        <FeedBody>
            {postCard}
            <PostBody onSubmit={onSubmitForm}>
                <input
                name={"body"}
                value={form.body}
                onChange={onChange}
                placeholder={"Comentar"}
                required
                />

                <button 
                type={"submit"}>Postar</button>
            </PostBody>
            {commentCard}

            <button onClick={loadMoreComments}>CARREGAR MAIS</button>
        </FeedBody>
    )
}

export default PostPage