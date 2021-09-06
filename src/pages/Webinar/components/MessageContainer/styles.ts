import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 60px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
`

export const MessageImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 10px;
`

export const MessageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
    width: 100%;
    height: 60px;
    border-radius: 10px;
`

export const MessageParticipantName = styled.span`
    font-weight: bold;
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
`

export const Message = styled.span`
    margin-left: 15px;
    color: gray;
`
