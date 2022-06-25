import styled from "styled-components";

export const SelectStyled = styled.select`
position: absolute;
left: 3em;
top: 3em;
font-family: 'Montserrat';
padding: 0.7em 1em;
width: 12em;
border: none;
border-radius: 0.5em;
@media screen and (max-width: 700px){
    top: 1em;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}
`