import { NavLink } from "../Nav/styled";
import SignUpButton from "./SignUpButton/styled";
import StyledButtonsWrapper from "./styled";

const ButtonsWrapper = () => (
   <StyledButtonsWrapper>
      <NavLink>Sign in</NavLink>
      <SignUpButton>Sign Up</SignUpButton>
   </StyledButtonsWrapper>
)

export default ButtonsWrapper;