import styled from "styled-components";
import HomeImage from "../../../../../assets/header-illustration.png";

export const StyledHomeContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const StyledHomeImage = styled.img.attrs({ src: HomeImage })`
   width: 700px;
   margin-right: -10px;
`;

