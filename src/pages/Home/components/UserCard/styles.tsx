import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

interface CardProps {
  isOwner?: boolean;
}

export const Container = styled.div<CardProps>`
  background-color: white;
  /* height: ${({ isOwner }) => (isOwner ? "550px" : "200px")};
  width: ${({ isOwner }) => (isOwner ? "100%" : "200px")}; */
  height: ${({ isOwner }) => (isOwner ? "80vh" : "100%")};
  width: ${({ isOwner }) => (isOwner ? "100%" : "150px")};
  max-height: ${({ isOwner }) => !isOwner && "150px"};
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  position: relative;

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

export const ProfileUser = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: blue;
  font-size: 36px;
  font-weight: bold;
`;
