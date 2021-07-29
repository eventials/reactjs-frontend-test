import styled from 'styled-components';

interface PlayersProps {
  quantity: number;
}

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

export const Players = styled.ul<PlayersProps>`
  height: calc(100vh - 175px);

  display: flex;

  &.layout-1 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '100%'};
    grid-template-columns: ${props => props.quantity === 2 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 3 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 4 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 5 && '50% 25% 25%'};

    li {
      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-column: ${props => props.quantity === 2 && '1'};

        grid-column: ${props => props.quantity === 3 && '1'};
        grid-row: ${props => props.quantity === 3 && '1 / span 2'};

        grid-column: ${props => props.quantity === 5 && '1'};
        grid-row: ${props => props.quantity === 5 && '1 / span 2'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '1'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};
      }
    }
  }

  &.layout-2 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '100%'};
    grid-template-columns: ${props => props.quantity === 2 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 3 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 4 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 5 && '50% 25% 25%'};

    li {
      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-column: ${props => props.quantity === 2 && '1'};

        grid-column: ${props => props.quantity === 3 && '1'};
        grid-row: ${props => props.quantity === 3 && '1 / span 2'};

        grid-column: ${props => props.quantity === 5 && '1'};
        grid-row: ${props => props.quantity === 5 && '1 / span 2'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '1'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};
      }
    }
  }

  &.layout-3 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '100%'};
    grid-template-columns: ${props => props.quantity === 2 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 3 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 4 && '50% 50%'};
    grid-template-columns: ${props => props.quantity === 5 && '50% 25% 25%'};

    li {

      padding: ${props => props.quantity === 1 && '2% 1%'};
      padding: ${props => props.quantity === 2 && '10% 2%'};
      padding: ${props => props.quantity === 3 && '6% 1.5%'};
      padding: ${props => props.quantity === 4 && '6% 1.5%'};
      padding: ${props => props.quantity === 5 && '8% 2%'};

      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-column: ${props => props.quantity === 2 && '1'};

        grid-column: ${props => props.quantity === 3 && '1'};
        grid-row: ${props => props.quantity === 3 && '1 / span 2'};

        grid-column: ${props => props.quantity === 5 && '1'};
        grid-row: ${props => props.quantity === 5 && '1 / span 2'};

        padding-bottom: ${props => props.quantity === 4 && '1.5%'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '1'};

        padding-bottom: ${props => props.quantity === 3 && '1.5%'};

        padding-bottom: ${props => props.quantity === 4 && '1.5%'};

        padding-top: ${props => props.quantity === 5 && '16%'};
        padding-bottom: ${props => props.quantity === 5 && '4%'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};

        padding-top: ${props => props.quantity === 3 && '1.5%'};

        padding-top: ${props => props.quantity === 4 && '1.5%'};

        padding-top: ${props => props.quantity === 5 && '16%'};
        padding-bottom: ${props => props.quantity === 5 && '4%'};
      }
      &:nth-of-type(4) {
        padding-top: ${props => props.quantity === 4 && '1.5%'};

        padding-top: ${props => props.quantity === 5 && '4%'};
        padding-bottom: ${props => props.quantity === 5 && '16%'};
      }
      &:nth-of-type(5) {
        padding-top: ${props => props.quantity === 5 && '4%'};
        padding-bottom: ${props => props.quantity === 5 && '16%'};
      }
    }
  }

  &.layout-4 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '100%'};
    grid-template-columns: ${props => props.quantity >= 2 && '75% 25%'};

    li {

      padding: ${props => props.quantity === 1 && '2% 1%'};
      padding: ${props => props.quantity >= 2 && '5% 2%'};

      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-row: ${props => props.quantity === 2 && '1 / span 2'};

        grid-column: ${props => props.quantity === 3 && '1'};
        grid-row: ${props => props.quantity === 3 && '1 / span 2'};

        grid-column: ${props => props.quantity === 4 && '1'};
        grid-row: ${props => props.quantity === 4 && '1 / span 3'};

        grid-column: ${props => props.quantity === 5 && '1'};
        grid-row: ${props => props.quantity === 5 && '1 / span 4'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '1'};

        padding-top: ${props => props.quantity === 2 && '15%'};

        padding-top: ${props => props.quantity === 3 && '15%'};
        padding-bottom: ${props => props.quantity === 3 && '1.5%'};

        padding-top: ${props => props.quantity === 4 && '15%'};
        padding-bottom: ${props => props.quantity === 4 && '1%'};

        padding-top: ${props => props.quantity === 5 && '15%'};
        padding-bottom: ${props => props.quantity === 5 && '1%'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};

        padding-bottom: ${props => props.quantity === 3 && '15%'};

        padding-bottom: ${props => props.quantity === 4 && '0.5%'};
        padding-top: ${props => props.quantity === 4 && '0.5%'};

        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(4) {
        padding-bottom: ${props => props.quantity === 4 && '15%'};
        padding-top: ${props => props.quantity === 4 && '1%'};
        
        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(5) {
        padding-bottom: ${props => props.quantity === 5 && '15%'};
        padding-top: ${props => props.quantity === 5 && '1%'};
      }
    }
  }

  &.layout-5 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '60%'};
    grid-template-columns: ${props => props.quantity === 2 && '60% 35%'};

    li {

      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-row: ${props => props.quantity >= 2 && '1 / span 5'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity >= 2 && '2'};
        grid-row: ${props => props.quantity >= 2 && '2 / span 3'};

        margin-left: ${props => props.quantity >= 2 && '-15%'};
      }
      &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5) {
        display: none;
      }
    }
  }

  &.layout-6 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '75%'};
    grid-template-columns: ${props => props.quantity >= 2 && '80% 20%'};
    
    li {

      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-row: ${props => props.quantity === 2 && '1 / span 3'};
        padding-left: ${props => props.quantity === 2 && '3%'};
        padding-top: ${props => props.quantity === 2 && '3%'};
        padding-bottom: ${props => props.quantity === 2 && '3%'};

        grid-row: ${props => props.quantity === 3 && '1 / span 4'};
        padding-left: ${props => props.quantity === 3 && '3%'};
        padding-top: ${props => props.quantity === 3 && '3%'};
        padding-bottom: ${props => props.quantity === 3 && '3%'};

        grid-row: ${props => props.quantity === 4 && '1 / span 3'};
        padding-left: ${props => props.quantity === 4 && '3%'};
        padding-top: ${props => props.quantity === 4 && '3%'};
        padding-bottom: ${props => props.quantity === 4 && '3%'};

        grid-row: ${props => props.quantity === 5 && '1 / span 4'};
        padding-left: ${props => props.quantity === 5 && '3%'};
        padding-top: ${props => props.quantity === 5 && '3%'};
        padding-bottom: ${props => props.quantity === 5 && '3%'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};
        grid-row: ${props => props.quantity === 2 && '2'};
        padding-left: ${props => props.quantity === 2 && '5%'};
        padding-right: ${props => props.quantity === 2 && '5%'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};
        padding: ${props => props.quantity === 3 && '0 5% 0.5% 5%'};

        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-bottom: ${props => props.quantity === 4 && '1%'};
        padding-top: ${props => props.quantity === 4 && '12%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '1%'};
        padding-top: ${props => props.quantity === 5 && '12%'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '3'};
        padding: ${props => props.quantity === 3 && '0.5% 5% 0 5%'};

        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-bottom: ${props => props.quantity === 4 && '0.5%'};
        padding-top: ${props => props.quantity === 4 && '0.5%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(4) {
        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-top: ${props => props.quantity === 4 && '1%'};
        padding-bottom: ${props => props.quantity === 4 && '12%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(5) {
        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '12%'};
        padding-top: ${props => props.quantity === 5 && '1%'};
      }
    }
  }

  &.layout-7 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '75%'};
    grid-template-columns: ${props => props.quantity >= 2 && '80% 20%'};
    
    li {

      &:nth-of-type(1) {
        grid-column: ${props => props.quantity === 1 && '1'};

        grid-row: ${props => props.quantity === 2 && '1 / span 3'};
        padding-left: ${props => props.quantity === 2 && '3%'};
        padding-top: ${props => props.quantity === 2 && '3%'};
        padding-bottom: ${props => props.quantity === 2 && '3%'};

        grid-row: ${props => props.quantity === 3 && '1 / span 4'};
        padding-left: ${props => props.quantity === 3 && '3%'};
        padding-top: ${props => props.quantity === 3 && '3%'};
        padding-bottom: ${props => props.quantity === 3 && '3%'};

        grid-row: ${props => props.quantity === 4 && '1 / span 3'};
        padding-left: ${props => props.quantity === 4 && '3%'};
        padding-top: ${props => props.quantity === 4 && '3%'};
        padding-bottom: ${props => props.quantity === 4 && '3%'};

        grid-row: ${props => props.quantity === 5 && '1 / span 4'};
        padding-left: ${props => props.quantity === 5 && '3%'};
        padding-top: ${props => props.quantity === 5 && '3%'};
        padding-bottom: ${props => props.quantity === 5 && '3%'};
      }
      &:nth-of-type(2) {
        grid-column: ${props => props.quantity === 2 && '2'};
        grid-row: ${props => props.quantity === 2 && '2'};
        padding-left: ${props => props.quantity === 2 && '5%'};
        padding-right: ${props => props.quantity === 2 && '5%'};

        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '2'};
        padding: ${props => props.quantity === 3 && '0 5% 0.5% 5%'};

        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-bottom: ${props => props.quantity === 4 && '1%'};
        padding-top: ${props => props.quantity === 4 && '12%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '1%'};
        padding-top: ${props => props.quantity === 5 && '12%'};
      }
      &:nth-of-type(3) {
        grid-column: ${props => props.quantity === 3 && '2'};
        grid-row: ${props => props.quantity === 3 && '3'};
        padding: ${props => props.quantity === 3 && '0.5% 5% 0 5%'};

        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-bottom: ${props => props.quantity === 4 && '0.5%'};
        padding-top: ${props => props.quantity === 4 && '0.5%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(4) {
        padding-left: ${props => props.quantity === 4 && '5%'};
        padding-right: ${props => props.quantity === 4 && '5%'};
        padding-top: ${props => props.quantity === 4 && '1%'};
        padding-bottom: ${props => props.quantity === 4 && '12%'};

        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '0.5%'};
        padding-top: ${props => props.quantity === 5 && '0.5%'};
      }
      &:nth-of-type(5) {
        padding-left: ${props => props.quantity === 5 && '5%'};
        padding-right: ${props => props.quantity === 5 && '5%'};
        padding-bottom: ${props => props.quantity === 5 && '12%'};
        padding-top: ${props => props.quantity === 5 && '1%'};
      }
    }
  }

  &.layout-8 {
    display: grid;

    grid-template-columns: ${props => props.quantity === 1 && '100%'};

    li {
      &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5) {
        display: none;
      }
    }
  }

  li {
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    position: relative;

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

export const LayoutsLayer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
  gap: 15px;
  padding: 10px 0;

  border-top: 2px solid var(--red);
  background-color: #fff;

  button {
    border: 2px solid transparent;

    &.active {
      border: 2px solid #000
    }
  }
`