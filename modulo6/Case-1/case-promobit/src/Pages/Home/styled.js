import styled from "styled-components"

export const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: black;
`

export const Pagination = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
padding: 10px;  
`
export const PaginationButton = styled.button`
cursor: pointer;
  border-radius: 100%;
  padding: 5px 8px;
  margin: 8px;
  background: none;
  color: white;
  border: 1px solid #151515;
  box-shadow: 0px 0px 5px #101010;
>button:hover{
  background-color: #2F2F2F;
}
.active{
  background-color: #2F2F2F;
}
`
export const PaginationButtonActive = styled.button`
cursor: pointer;
  border-radius: 100%;
  padding: 5px 8px;
  margin: 8px;
  background-color: #2F2F2F;
  color: white;
  border: 1px solid #151515;
  box-shadow: 0px 0px 5px #101010;
`

export const SearchBar = styled.div`
background-color: #151515;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
@media screen and (max-width: 500px){
  justify-content: space-around;
}
`

export const SearchToolbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
@media screen and (max-width: 500px){
 >label{
   display: none;
 } 
}
`

export const SearchButton = styled.button`
    color: white;
    cursor: pointer;
    background: #2F2F2F;
    border: transparent;
    border-radius: 20px;
    padding: 4px 16px;
    margin: 0 5px;
    :hover{
      background-color: #4E4E4E;
    }
@media screen and (max-width: 500px) {
  display: none;
}
`

export const ResetButton = styled.button`
    color: white;
    cursor: pointer;
    background: #2F2F2F;
    border: transparent;
    border-radius: 20px;
    padding: 4px 16px;
    margin: 0px 10px 0px 0px;
    :hover{
      background-color: #4E4E4E;
    }
`

export const SearchInput = styled.input`
border: transparent;
border-radius: 20px;
padding: 3px 12px;
@media screen and (max-width: 500px){
  width: 160px;
  padding: 2px 6px ;
}
`

export const FilterSelect = styled.select`
border: transparent;
border-radius: 20px;
margin-left: 10px;
padding: 3px 13px;
@media screen and (max-width: 500px){
 margin-left: 0 ;
 padding:0;
}
`

export const MovieCardBody = styled.div`
cursor: pointer;
background-color: #080808;
margin: 10px;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
>img{
  margin: 5px;
  width: 170px;
  height: 255px;
  object-fit: fill;
  margin-bottom: 8px;
 
}
>p{
  margin: 2px;
}
:hover{
  background: linear-gradient(#2F2F2F, #080808);
}

@media screen and (max-width: 500px){
  width: 130px;
  padding: 5px;
  margin: 5px;
 >img{
   width: 100px;
   height: 150px;
 } 
 >p{
   font-size: 10px;
 }
}
`

export const Catalog = styled.div`
background-color: #000000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
min-height: 50vh;

@media screen and (max-width: 500px){
  align-items: center;
  justify-content: center;
}


`
export const MoviesGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 20px;
grid-column-gap: 20px;
align-items: center;
justify-content: center;

@media screen and (max-width: 500px){
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 150px);
  grid-row-gap: 10px;
  grid-column-gap: -10px;
}
`