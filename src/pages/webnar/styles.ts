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

    .leftContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 75%;
        height: 95%;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7%;
        width: 100%;
        background-color: #EFF2F8;
        border-radius: 20px;
    }

    .logo {
        width: 50px;
        border-radius: 50px;
        margin-left: 10px;
        box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
    }

    .titleContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 80%;
        margin-left: 30px;
    }

    .title {
        display: flex;
        flex-direction: column;
        font-weight: bolder;
        font-size: 22px;
    }

    .headerIconsContainer {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-right: 30px;
        margin-left: 15px;
        box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
    }

    .wrap {
        width: 100%;
        height: 77%;
        display: flex;
        position: relative;
        justify-content: flex-end;
        border-radius: 20px;
    }   

    .wrap > .bg-video {
        background-color: #EFF2F8;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; 
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 20px;
    }
    
    .wrap > .bg-video > video {
        width: 100%;
        border-radius: 20px;
    }

    .chatContainer {
        background-color: red;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .participantsVideoContainer {
        margin-top: 15px;
        margin-right: 10px;
        height: 93%;
        width: 140px;
        overflow-y: auto;
    }

    .participantsVideoContainer::-webkit-scrollbar {
        display: none;
    }

    .participantsBox {
        width: 130px;
        height: 130px;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    .participantsData {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .participantImage {
        position: relative;
        width: 120px;
        height: 120px;
        z-index: 5;
        border-radius: 20px;
        border: 4px solid white;
        object-fit: cover;

    }

    .participanteName {
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
        
    }

    .menuContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        width: 100%;
        height: 12%;
        background-color: #EFF2F8
    }

    .menuItemContainer {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        margin-right: 15px;
        margin-left: 15px;
        box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
    }

    .menuIcon {
        margin: 10px;
        border-right: 80px;
    }

    .rigthContainer {
        height: 95%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #EFF2F8;
        border-radius: 20px;
    }

    .chatContainerBody {
        width: 100%;
        height: 100%;
    }

    .messageContainer {
        display: flex;
        align-items: center;
        width: 90%;
        height: 60px;
        border-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
    }

    .messageImage {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-right: 10px;
    }

    .messageContentContainer {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
        width: 100%;
        height: 60px;
        border-radius: 10px;
    }

    .messageParticipantName {
        font-weight: bold;
        font-size: 14px;
        margin-left: 15px;
        margin-top: 5px;
    }

    .message {
        margin-left: 15px;
        color: gray;
    }

    .headerChat {
        display: flex;
        justify-content: start;
        width: 100%;
        margin-left: 35px;
        font-size: 24px;
        font-weight: bold;
    }

    .messageChatContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 97%;
        margin-bottom: 15px;
    }

    .messageChat {
        display: flex;
        justify-content: space-around;
        border-radius: 10px;
        align-items: center;
        box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
        background-color: white;
        width: 95%;
        height: 100%;
    }

    .sendMessageButton {
        width: 45px;
        height: 37px;
        background-color: #4705EB;
        border: none;
        border-radius: 7px;
        color: white;

    }

`;