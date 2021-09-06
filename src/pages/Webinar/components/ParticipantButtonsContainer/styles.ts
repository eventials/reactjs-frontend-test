import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    top: 3px;
    right: 0;
    width: 70px;
    height: 40px;
    z-index: 100;
`

export const TurnParticipantScreenOff = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
`

export const RemoveParticipantButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 5px;
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
`
