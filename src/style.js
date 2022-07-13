import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;    
      border: 0;
  }
`;

export const TextTitle = styled.h1`
  width: 100%;
  text-align: center;
`

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  width: 100%;
  button{
    background-color: #069;
    color: #fff;
    padding: 4px;
    cursor: pointer;
  }
`;

export const CardContainer = styled.section`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 5px;
  width: 400px;
  
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  box-shadow: 1px 1px 1px 1px #888;
  padding: 10px;
  gap: 5px;

  img {
    max-width: 70%;
  }
`;


export const Image = styled.img`
  filter: brightness(${props=> props.opacity ? 1: 0.1});
`
