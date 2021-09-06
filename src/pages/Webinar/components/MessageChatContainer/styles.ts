import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 97%;
    margin-bottom: 15px;
    margin-top: 15px;
`

export const MessageChat = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
    background-color: white;
    width: 95%;
    height: 100%;
`

export const MessageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 37px;
    background-color: #6200FF;
    border: none;
    border-radius: 7px;
    color: white;
`
