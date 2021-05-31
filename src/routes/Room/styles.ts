import styled from 'styled-components';

export const Container = styled.div`
  header {
    height: 40px;
    background: var(--purple);

    display: flex;
    align-items: center;

    padding-left: 2rem;

    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  footer {
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
  }
`

export const Players = styled.ul`
  height: calc(100vh - 110px);
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  li {
    list-style: none;
    
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 25%;

    img {
      max-height: 90%;
      width: 90%;
    }
  }
`