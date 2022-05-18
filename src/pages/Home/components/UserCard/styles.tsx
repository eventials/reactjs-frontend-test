import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  background-color: white;
  height: 100px;
  width: 100px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  border-radius: 4px;
  @media screen and (max-width: 600px) {
    height: 50px;
    width: 50px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: red;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const ProfileUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: blue;
  font-size: 36px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    height: 40px;
    width: 40px;
    font-size: 21px;
  }
`;