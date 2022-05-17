import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  showUsers?: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

export const UsersWrapper = styled.div<Props>`
  display: flex;
  width: 100%;
  /* max-width: 26vw; */
  max-width: ${({ showUsers }) => (showUsers ? "26vw" : "0vw")};
  flex-wrap: wrap;
  height: 100%;
  max-height: fit-content;
  overflow: scroll;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

export const OwnerWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 75vw;
  max-width: ${({ showUsers }) => (showUsers ? "75vw" : "98vw")};
  position: relative;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: blue;
  margin: 0 10px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 21px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const ArrowIcon = styled(MdArrowForwardIos)<Props>`
  position: absolute;
  right: -15px;
  top: 20px;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ showUsers }) =>
    showUsers ? "rotate(180deg)" : "rotate(0deg)"};
`;
