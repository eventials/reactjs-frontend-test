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
  justify-content: space-between;
  align-items: center;
  align-content: space-between;

  li {
    list-style: none;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--red);
    height: 100%;

    position: relative;

    &:first-child:nth-last-child(1) {
      width: 100%;
    }

    &:first-child:nth-last-child(2),
    &:first-child:nth-last-child(2) ~ li {
      width: 49.5%;
    }

    &:first-child:nth-last-child(3),
    &:first-child:nth-last-child(3) ~ li {
      width: 33%;
    }

    &:first-child:nth-last-child(4),
    &:first-child:nth-last-child(4) ~ li {
      width: 49.5%;
      height: 49%;
    }

    &:first-child:nth-last-child(n + 5),
    &:first-child:nth-last-child(n + 5) ~ li {
      width: 24.5%;
      height: 49%;
    }

    &:first-child:nth-last-child(n + 9),
    &:first-child:nth-last-child(n + 9) ~ li {
      width: 24.5%;
      height: 32.5%;
    }

    &:hover button {
      opacity: 1;
    }

    button {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: var(--red);
      color: #fff;

      transition: background-color opacity 0.4s;

      opacity: 0;

      &:hover {
        background-color: var(--purple);
      }
    }
  }
`