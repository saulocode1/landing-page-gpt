import React from "react";
import Main from "./Components/Main/styled";
import Home from "./Components/Sections/Home/Home";
import GlobalStyle from "./globalStyles";

const App = () => (
   <>
      <Main>
         <GlobalStyle />
         <Home />
      </Main>
   </>
);

export default App;
