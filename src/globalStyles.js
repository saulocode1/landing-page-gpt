import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Manrope', sans-serif;
   }

   body {
      background-color: #040C18;
   }

   :root {
      // Fonts
      --font-1: 1.125rem; // 18px
      --font-2: 3.875rem; // 62px
      
      // Colors
      --light-color: #FFFFFF;
      --button-color: #FF4820;

      //Line height
      --height-1: 1.5625rem;
      --height-2: 4.6875rem; // 75px

      //Font weight
      --weight-500: 500;
      --weight-800: 800;
   }
`;

export default GlobalStyle;
