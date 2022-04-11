import styled from "styled-components";

interface WrapperProps {
  cardsQnt: number;
}

let rows = 1;

const getRows = (cardsQnt: number) => {
  if(cardsQnt <= 4){
    rows = 1;
  }
  else {
    const isDivisibleByFive = cardsQnt % 5 === 0;
    if (isDivisibleByFive) {
      rows += 1;
    }
  }
  console.log({rows, cardsQnt});
  return rows;
};

const getColumns = (cardsQnt: number) => {
  if (cardsQnt >= 4) return 4;
  else return cardsQnt;
};

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  border-radius: 100%;
  background-color: red;
  object-fit: cover;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${({ cardsQnt }) =>
    `repeat(${getColumns(cardsQnt)}, 1fr)`};
  grid-template-rows: ${({ cardsQnt }) => `repeat(${getRows(cardsQnt)}, 1fr)`};
`;
