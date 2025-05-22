import styled from "styled-components";

const RemovetButton = styled.button`
  background: #fbca1f;
  font-family: inherit;
  font-weight: 900;
  font-size: 12px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  cursor: pointer;
  width: 100px;
  height: 50px;

  &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em;
  }
  &:active{
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em;
  }
`;

const ArticleCart = styled.article`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px 0;
background-color: #f3f3f3;
`;

const TitleCart = styled.h2`
font-size: 25px;
font-weight: 900;
color: #0f0f0f;

`;

const CardCart = styled.section`
display: flex;
flex-wrap: wrap;
align-content: space-around;
flex-direction: row;
justify-content: center;
background-color: #6495ed;
width: 200px;
height: 250px;
padding: 10px;
`;

const CartP = styled.p`
padding: 0 20px;
`;



export { 
        RemovetButton,
        ArticleCart,
        TitleCart,
        CardCart,
        CartP,

}