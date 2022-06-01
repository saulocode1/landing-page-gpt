import styled from "styled-components";
import BlurImg from "../../assets/blur-01.png";

const Blur = styled.img.attrs({ src: BlurImg })`
   width: 1000px;
   position: fixed;
   left: 0;
   z-index: -1;
`;

export default Blur;
