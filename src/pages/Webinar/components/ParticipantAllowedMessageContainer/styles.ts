import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    color: white;
    width: 250px;
    height: 35px;
    border-radius: 20px;
    background-color: ${props => props.color};
    font-weight: bolder;
`