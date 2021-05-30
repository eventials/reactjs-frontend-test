import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;
`

export const Footer = styled.footer`
  position: fixed;
  background-color: var(--purple);
  bottom: 0;
  left: 0;
  right: 0;
  
  height: 70px;
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    width: 100px;
    height: 100%;

    background: var(--red);

    border: 1px solid var(--red);

    transition: border 0.2s;

    &:hover {
      border: 1px solid #fff;
    }

    svg {
      color: #fff;
    }
  }
`