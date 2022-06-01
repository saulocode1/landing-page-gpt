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
      --font-3: 1.25rem; // 20px
      
      // Colors
      --light-color: #FFFFFF;
      --button-color: #FF4820;
      --text-color: #81AFDD;
      --input-text-color: #3D6184;
      --input-color: #052D56;

      // Line height
      --height-1: 1.5625rem; // 25px
      --height-2: 4.6875rem; // 75px
      --height-3: 1.6875rem; // 27px

      //  Font weight
      --weight-400: 400;
      --weight-500: 500;
      --weight-700: 700;
      --weight-800: 800;
   }
`;

export default GlobalStyle;
