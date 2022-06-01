import ButtonsWrapper from "../Buttons";
import HeaderLogo from "../Logo/styled";
import NavBar from "../Nav";
import { NavLogoWrapper, StyledHeader } from "./styled";

const Header = () => (
   <StyledHeader>
      <NavLogoWrapper>
         <HeaderLogo />
         <NavBar />
      </NavLogoWrapper>
      <ButtonsWrapper />
   </StyledHeader>
);

export default Header;
