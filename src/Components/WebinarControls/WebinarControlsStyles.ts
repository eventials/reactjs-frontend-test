import { Box } from "@chakra-ui/react";
import styled from "styled-components";

interface ControlCircleButtonProps {
  danger?: boolean;
  isMuted?: boolean;
}

const setButtonBackGroundColor = (props: ControlCircleButtonProps) => {
  if (props.danger) {
    return "#ff5252";
  }
  if (props.isMuted) {
    return "white";
  }
  return "rgba(0, 0, 0, 0.5)";
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 50px;
`;

export const InnerControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  background-color: #2d3647;
`;

export const ControlCircleButton = styled(Box)<ControlCircleButtonProps>`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => setButtonBackGroundColor(props)};
  :hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.6;
  }
`;
