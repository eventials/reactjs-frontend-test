import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;

  margin: auto;
  padding: 100px 15px 0;

  h1 {
    margin-bottom: 1.5rem;
    color: var(--red);
  }

  input {
    width: 200px;
    height: 40px;
    border: 1px solid #000;
    padding: 0 10px;
    font-size: 1.2rem;

    &::placeholder {
      font-family: 'Roboto Condensed', sans-serif;
    }
  }

  button {
    width: 200px;
    height: 40px;
    border: 1px solid var(--purple);
    background: var(--purple);
    color: var(--red);
    font-size: 1.1rem;
    transition: filter 0.2s;
    font-weight: 700;

    &:hover {
      filter: brightness(1.25);
    }
  }
`