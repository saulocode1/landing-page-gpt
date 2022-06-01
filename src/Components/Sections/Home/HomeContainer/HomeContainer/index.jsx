import HomeText from "../../HomeText/HomeText";
import HomeMainTitle from "../../HomeText/MainTitle";
import { HomeTextContainer } from "../../HomeText/MainTitle/styled";
import HomeInputEmail from "../HomeInputEmail";
import { StyledHomeContainer, StyledHomeImage } from "./styled";

const HomeContainer = () => (
   <StyledHomeContainer>
      <HomeTextContainer>
         <HomeMainTitle />
         <HomeText />
         <HomeInputEmail />
      </HomeTextContainer>
      <StyledHomeImage />
   </StyledHomeContainer>
);

export default HomeContainer;
