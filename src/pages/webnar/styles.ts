import styled from 'styled-components';

export const WebnarContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid red;

    .leftContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .headerContainer {
        display: flex;
        align-items: center;
    }

    .titleContainer {
        display: flex;
        align-items: center;
    }

    .chatContainer {
        display: flex;
        height: 270px;
        border: 1px solid green;
    }

    .ownerVideo {
        display: flex;
        justify-content: flex-end;
        width: 300px;
        height: 270px;
        background-color: gray;
        border-radius: 7px;
    }

    .participantsVideoContainer {
        width: 60px;
        height: 60px;
        margin: 5px 5px 5px 0;
        background-color: white;
        border-radius: 7px;
    }

    .menuContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        width: 300px;
        height: 40px;
        border-radius: 7px;
        border: 1px solid black;
    }
`;