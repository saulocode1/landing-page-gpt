import Blur from "../../../Blur/styled";
import Header from "../../../Header/Header";
import HomeContainer from "../HomeContainer/HomeContainer";
import StyledHome from "./styled";

const Home = () => (
   <StyledHome>
      <Blur />
      <Header />
      <HomeContainer />
   </StyledHome>
);

export default Home;
