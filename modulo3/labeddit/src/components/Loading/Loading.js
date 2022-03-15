import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
import loadGif from '../../media/cat-walk.gif'

const BodyLoading = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 100vw;
height: 80vh;
>img{
    height: 280px;
    width: auto;
    margin-bottom: 20px;
    margin-left: -65px;
}
`

const Loading = () => {
    return(
        <BodyLoading>
            <img src={loadGif} alt="Carregando"/>
            <CircularProgress/>
        </BodyLoading>
    )
}

export default Loading