import styled from "styled-components";

const SignUpButton = styled.button`
   background-color: var(--button-color);
   font-size: var(--font-1);
   border-radius: 5px;
   border: none;
   color: var(--light-color);
   padding: 1rem 2.75rem;
   cursor: pointer;
   transition: 200ms ease-in-out;

   &:hover {
      box-shadow: 2px 2px 0px 1px var(--light-color);
      transition: 200ms ease-in-out;
   }
`;

export default SignUpButton;
