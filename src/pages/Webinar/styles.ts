import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const VideoGridWrapper = styled.div`
  margin-top: 1rem;
  width: 90%;
  height: 80%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const VideoModal = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: #fe2c55;
`;

export const VideoMockup = styled.img`
  width: 100%;
  max-height: 75vh;
  height: auto;
  border-radius: 8px;
  border: 2px solid #fe2c55;
  overflow: hidden;
`;

export const ActionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 50%;
  height: 5rem;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  font-size: 0;
  margin: 0 auto;
  background-color: #fe2c55;
  border-radius: 50%;
  border: none;
  padding: 6px;
  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
