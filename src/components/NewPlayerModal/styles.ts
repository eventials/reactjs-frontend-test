import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button {
      border: initial;
      width: 80px;
      height: 30px;
      background-color: var(--purple);
      color: #fff;
      text-align: center;

      transition: background-color 0.2s;

      &:hover {
        background-color: var(--red);
      }
    }
  }

  p {
    color: var(--red);
    font-weight: 700;
  }
`