import styled from "styled-components";

export const StyledInputEmail = styled.input.attrs({
   placeholder: "Your Email Address",
})`
   width: 28.5rem;
   padding: 24px 0px 22px 32px;
   color: var(--input-text-color);
   border-radius: 5px 0px 0px 5px;
   background-color: var(--input-color);
   font-size: var(--font-3);
   outline: none;
   border: none;
   transition: 200ms ease-in-out;

   &::placeholder {
      color: var(--input-text-color);
   }

   &:focus {
      box-shadow: 0px 0px 0px 1px var(--light-color);
      transition: 200ms ease-in-out;
   }
`;

export const StyledEmailButton = styled.button`
   border: none;
   padding: 21px 26px 26px 34px;
   background-color: var(--button-color);
   color: var(--light-color);
   font-size: var(--font-3);
   font-weight: var(--weight-700);
   border-radius: 0px 5px 5px 0px;
`;

export const StyledInputWrapper = styled.div`
   margin-top: 3.125rem;
   display: flex;
   align-items: center;
   height: 73px;
`;
