import styled from "styled-components";
import { BaseButton } from "components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  width: 100%;
  background-image: linear-gradient(38deg, #131314, #122225);
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(60px);
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 21px;
  box-shadow: 0px 3px 10px rgba(250, 249, 249, 0.3);
  width: 100%;
  max-width: 400px;
`;

export const Button = styled(BaseButton)`
  width: 100%;
  justify-content: space-between !important;
  height: 48px;
`;
