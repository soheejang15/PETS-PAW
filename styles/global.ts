import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #FBFDFA;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  main {
    /* width: 1024px; */
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`;

export default GlobalStyle;
