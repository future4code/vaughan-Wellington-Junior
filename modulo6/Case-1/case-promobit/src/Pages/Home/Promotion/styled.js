import styled from "styled-components";

export const Promo = styled.div`
width: 100vw;
height: 390px;
margin: 0;
gap: 0;
position: relative;
overflow: hidden;
@media screen and (max-width: 500px){
    width: 100%;
    height: 220px;
}
`
export const PromoDetails = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
`

export const PromoText = styled.div`
background-size: 100%;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.3925945378151261) 67%);
text-align: left;
position: absolute;
left:0;
height: fit-content;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 0px 20px;
color: white;
>h4{
  cursor: pointer;
}

@media screen and (max-width: 500px){
    text-align: left;
    background: linear-gradient(0deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.3925945378151261) 67%);
    position: auto;
    justify-content: center;
    align-items: left;
    padding-left: 10px;
    margin: 0;
>p{
    display:none ;
}
}
`
export const PromoTitle = styled.div`
display: flex;
>h3{
  margin-left: 8px;
}
@media screen and (max-width: 500px){
 font-size:13px;
}
`
export const PromoImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    object-position: 50% 0%;
 @media screen and (max-width: 500px) {
    object-fit: cover;
    width: 100%;  
 }
`