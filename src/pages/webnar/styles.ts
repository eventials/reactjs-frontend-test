import styled from 'styled-components';

export const WebnarContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid red;

    .leftContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 75%;
        height: 95%;
        border: 1px solid black;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5%;
        width: 100%;
        border: 1px solid blue;
        background-color: #EFF2F8;
    }

    .logoContainer {
        width: 10%;
    }

    .titleContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 80%;
        margin-left: 30px;
        border: 1px solid yellow;
    }

    .chatContainer {
        display: flex;
        width: 100%;
        height: 80%;
        border: 1px solid green;
    }

    .ownerVideo {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        background-color: gray;
        border-radius: 20px;
    }

    .participantsVideoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .participants {
        width: 150px;
        height: 20%;
        margin: 10px 15px 10px 0;
        background-color: white;
        border-radius: 20px;
    }

    .menuContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        width: 100%;
        height: 8%;
        border-radius: 7px;
        border: 1px solid black;
        background-color: #EFF2F8
    }

    .menuIcon {
        margin: 10px;
    }

    .rigthContainer {
        height: 95%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        background-color: #EFF2F8
    }

    .headerChat {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
    }

    .messageChat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8%;
        width: 95%;
        border: 1px solid pink;
    }

    .attachIcon {
        align-self: center;
    }
`;