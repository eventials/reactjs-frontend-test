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
