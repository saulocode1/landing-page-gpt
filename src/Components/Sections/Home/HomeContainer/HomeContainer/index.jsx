import HomeText from "../../HomeText/HomeText";
import HomeMainTitle from "../../HomeText/MainTitle";
import { HomeTextContainer } from "../../HomeText/MainTitle/styled";
import { StyledInputEmail } from "../HomeInputEmail/styled";
import { StyledHomeContainer, StyledHomeImage } from "./styled";

const HomeContainer = () => (
   <StyledHomeContainer>
      <HomeTextContainer>
         <HomeMainTitle />
         <HomeText />
         <StyledInputEmail />
      </HomeTextContainer>
      <StyledHomeImage />
   </StyledHomeContainer>
);

export default HomeContainer;
