import styled from "styled-components";

export const StyledInputEmail = styled.input.attrs({
   placeholder: "Your Email Address",
})`
   margin-top: 50px;
   width: 28.5rem;
   padding: 24px 0px 22px 32px;
   color: var(--input-text-color);
   border-radius: 5px 0px 0px 5px;
   background-color: var(--input-color);
   font-size: var(--font-3);
   outline: none;
   border: none;

   &::placeholder {
      color: var(--input-text-color);
   }
`;
