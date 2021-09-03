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
    font-family: 'Open Sans', sans-serif;


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

    .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        justify-content: flex-end;
    }

    .wrap > .bg-video {
        background-color: blue;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; 
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .wrap > .bg-video > video {
        width: 100%;
    }

    .chatContainer {
        background-color: red;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .participantsVideoContainer {
        margin-top: 10px;
        margin-right: 10px;
        height: 500px;
        width: 120px;
        overflow-y: auto;
    }

    .participantsVideoContainer::-webkit-scrollbar {
        display: none;
    }

    .participants {
        width: 120px;
        height: 120px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 10px;
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