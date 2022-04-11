import styled from "styled-components";
import { Image } from "@chakra-ui/react";

export const InnerCard = styled.div`
  padding: 20px;
  height: 100% !important;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #272f3d;
  opacity: 0.8;
  text-align: center;
  border-radius: 10px;
`;

export const StyledImage = styled(Image)`
  transition: 0.5s ease all;
`;

export const CloseButton = styled.span`
  transition: 0.5s ease all;
  opacity: 0.01;
  position: absolute;
  font-size: 3.5rem;
  top: 35%;
  color: #fff;
  font-weight: bold;
  left: 28%;
`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  :hover {
    span {
      opacity: 1;
      transition: 0.5s ease all;
    }
    img {
      transition: 0.5s ease all;
      opacity: 0.1;
    }
  }
`;
