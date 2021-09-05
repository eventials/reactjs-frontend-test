import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const ParticipantVideo = styled.video`
    position: relative;
    width: 120px;
    height: 120px;
    z-index: 5;
    border-radius: 20px;
    border: 4px solid white;
    object-fit: cover;
    background-color: black;
`

export const ParticipanteName = styled.p`
    position: absolute;
    margin-bottom: 7px;
    bottom: 0;
    z-index: 10;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.20);
    border-radius: 20px;
    width: 100px;
    text-align: center;
`