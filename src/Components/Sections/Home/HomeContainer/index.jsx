import HomeText from "../HomeText/HomeText";
import HomeMainTitle from "../HomeText/MainTitle";
import { HomeTextContainer } from "../HomeText/MainTitle/styled";
import { StyledHomeImage, StyledHomeContainer } from "./styled";

const HomeContainer = () => (
   <StyledHomeContainer>
      <HomeTextContainer>
         <HomeMainTitle />
         <HomeText />
      </HomeTextContainer>

      <StyledHomeImage />
   </StyledHomeContainer>
);

export default HomeContainer;
