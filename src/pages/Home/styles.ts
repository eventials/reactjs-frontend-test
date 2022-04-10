import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 80%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`;

export const Image = styled.img`
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #737380;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 16px;
  background-color: #f8f8f8;
  border: 1px solid #a8a8b3;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: #fe2c55;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
