import styled from "styled-components";

const AddCartButton = styled.button`
  background: #FF0000;
  color: #f5f5f5;
  font-family: inherit;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 12px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  cursor: pointer;
  max-height: 50px;
  height: 40px;
  box-sizing: border-box;

  &:hover {
        transform: translate(-0.04em, -0.04em);
        box-shadow: 0.12em 0.12em;
  }
  &:active{
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
  }
`;


const ProductArticle = styled.article`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
gap: 35px;

`;

const ProductCard = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: #6495ed;
width: 330px;
height: 300px;
`;

const ProductName = styled.p`
color: #020101;
padding-top: 15px;
font-size: 20px;

`;

const ProductImg = styled.img`
height: 200px;
width: 130px;
padding-top: 20px;
cursor: pointer;
box-sizing: border-box;

&:hover{
      transform: scale(1.25);
}
`;


export { 
        AddCartButton,
        ProductArticle,
        ProductCard,
        ProductName,
        ProductImg,
}