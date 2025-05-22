import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMain = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
color: beige;
background-color: #2E2E2E;
box-sizing: border-box;

`;
const NavHeader = styled.nav`
display: flex;
align-items: center;
gap: 20px;
padding: 10px;
`;

const ImgHeader = styled.img`
width: 70px;
height: 60px;
border-radius: 20px;
margin: 7px 0 7px 10px;
border: 1px solid white;
`;

const LinkHeader = styled(Link)`
text-decoration: none;
color: #f5f5f5;

&hover{
    color: #0077FF;
}
`;



export { HeaderMain,
         NavHeader,
         ImgHeader,
         LinkHeader,
         
 }