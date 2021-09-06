import styled from 'styled-components';

export const WebinarContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    height: 95%;
`

export const MainVideoContainer = styled.div`
    width: 100%;
    height: 77%;
    display: flex;
    position: relative;
    justify-content: flex-end;
    border-radius: 20px;
`

export const BgVideo = styled.div`
    background-color: #EFF2F8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; 
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

export const MainVideo = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: black;
`

export const ParticipantsVideoContainer = styled.div`
    margin-top: 15px;
    margin-right: 10px;
    height: 93%;
    width: 140px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const ParticipantsBox = styled.div`
    position: relative;
    width: 130px;
    height: 130px;
    margin-bottom: 10px;
    border-radius: 20px;
`

export const RigthContainer = styled.div`
    height: 95%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #EFF2F8;
    border-radius: 20px;
`

export const HeaderChat = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    margin-left: 35px;
    font-size: 24px;
    font-weight: bold;
`

export const ChatContainerBody = styled.div`
    width: 100%;
    height: 800px;
    overflow-y: auto;
`
