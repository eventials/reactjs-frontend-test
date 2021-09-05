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

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7%;
    width: 100%;
    background-color: #EFF2F8;
    border-radius: 20px;
`

export const Logo = styled.img`
    width: 50px;
    border-radius: 50px;
    margin-left: 10px;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-left: 30px;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bolder;
    font-size: 22px;
    
`

export const JoinParticipantContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const JoinParticipandMessage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 35px;
    background-color: #6200FF;
    color: white;
    border-radius: 20px;
    font-weight: bolder;
`

export const HeaderIconsContainer = styled.div`
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
`

export const ParticipantAllowedMessageContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    color: white;
    width: 250px;
    height: 35px;
    border-radius: 20px;
    background-color: ${props => props.color};
    font-weight: bolder;
`

export const Wrap = styled.div`
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

export const ParticipantsData = styled.div`
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

export const ParticipantButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    top: 3px;
    right: 0;
    width: 70px;
    height: 40px;
    z-index: 100;
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

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    height: 12%;
    background-color: #EFF2F8;
`

export const MenuItemContainer = styled.div`
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

    .menuIcon {
        margin: 10px;
        border-right: 80px;
    }
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

export const MessageContainer = styled.div`
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

export const MessageChatContainer = styled.div`
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












    

    








