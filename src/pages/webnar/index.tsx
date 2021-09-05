import React, { useState } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import { MdSend } from 'react-icons/md';
import { HiOutlineUserRemove } from 'react-icons/hi';
import TextField from '@material-ui/core/TextField';
import {
    WebnarContainer,
    LeftContainer,
    HeaderContainer,
    Logo,
    TitleContainer,
    Title,
    JoinParticipantContainer,
    HeaderIconsContainer,
    ParticipantAllowedMessageContainer,
    Wrap,
    BgVideo,
    MainVideo,
    ParticipantsVideoContainer,
    ParticipantsBox,
    ParticipantsData,
    ParticipantImage,
    ParticipanteName,
    MenuContainer,
    MenuItemContainer,
    RigthContainer,
    HeaderChat,
    ChatContainerBody,
    MessageContainer,
    MessageImage,
    MessageContentContainer,
    MessageParticipantName,
    Message,
    MessageChatContainer,
    MessageChat,
    MessageButton,
} from "./styles";
import { chatMessages, menuIconsList, participants } from './data';

const Webnar: React.FC = () => {
    const [meetingParticipants, setMeetingParticipants] = useState(participants)
    const [messageContent, setMessageContent] = useState("")
    const [chatMessagesList, setChatMessagesList] = useState(chatMessages)
    const [isMainVideoOn, setIsMainVideoOn] = useState(true)
    const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
    const [isShareScreenOn, setIsShareScreenOn] = useState(true)
    const [isVolumeOn, setIsVolumeOn] = useState(false)
    const [participantWantsJoin, setParticipantWantsJoin] = useState(false)
    const [paticipantAllowedMessage, setPaticipantAllowedMessage] = useState("")
    const [participantWasAllowed, setParticipantWasAllowed] = useState(false)

    window.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'Z') {
            setPaticipantAllowedMessage("")
            setParticipantWantsJoin(true)
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'X') {
            setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Participante 2"}])

        }
    });

    const addMessage = () => {
        if(messageContent !== "") {
            setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Participante 1"}])
            setMessageContent("")
        }
    }

    const handleClickMenuIcon = (handleFunction: string) => {
        switch (handleFunction) {
            case "handleCamera":
                setIsMainVideoOn(!isMainVideoOn);
                break;
            case "handleAudio":
                setIsMicrophoneOn(!isMicrophoneOn);
                break;
            case "handleShareScreen":
                setIsShareScreenOn(!isShareScreenOn);
                break;
            case "handleVolume":
                setIsVolumeOn(!isVolumeOn);
                break;
        }
    }

    const checkState = (state: string) => {
        switch (state) {
            case "isVideoOn":
                return isMainVideoOn
            case "isMicrophoneOn":
                return isMicrophoneOn
            case "isShareScreenOn":
                return isShareScreenOn
            case "isVolumeOn":
                return isVolumeOn
        }
    }

    const handleAllowParticipantJoin = (allowed: boolean) => {
        if(allowed) {
            setParticipantWantsJoin(false)
            setMeetingParticipants([...meetingParticipants, {id: 1, name: "Beto", image: "participant1.jpg"}])
            setPaticipantAllowedMessage("Participante entrou na sala")
            setParticipantWasAllowed(true)
            setTimeout(() => setPaticipantAllowedMessage(""), 5000)
        } else if (!allowed) {
            setParticipantWantsJoin(false)
            setPaticipantAllowedMessage("Participante foi recusado")
            setParticipantWasAllowed(false)
            setTimeout(() => setPaticipantAllowedMessage(""), 5000)
        }
    }

    return (
        <WebnarContainer>
            <LeftContainer>
                <HeaderContainer>
                    <Logo src="logo.png" alt="logo" />
                    <TitleContainer>
                        <Title>
                            <span>UX/UI Design Conference Meeting</span>
                        </Title>
                            {participantWantsJoin &&
                                 <JoinParticipantContainer>
                                    <span>Participante deseja entrar na sala</span>
                                    <HeaderIconsContainer>
                                        <RiUserAddLine
                                            size={30}
                                            color="#FFBD2D"
                                            title="Aceitar participante"
                                            onClick={() => handleAllowParticipantJoin(true)}
                                            />
                                    </HeaderIconsContainer> 
                                    <HeaderIconsContainer>
                                        <HiOutlineUserRemove size={30}
                                            color="#FF0049"
                                            title="Recusar participante"
                                            onClick={() => handleAllowParticipantJoin(false)}
                                        />
                                        
                                    </HeaderIconsContainer>
                                </JoinParticipantContainer>
                            }
                            {paticipantAllowedMessage !== "" &&
                                <ParticipantAllowedMessageContainer color={participantWasAllowed ? "#FFBD2D" : "#FF0049"} className="participantAllowedMessageContainer">
                                    <span>{paticipantAllowedMessage}</span>
                                </ParticipantAllowedMessageContainer>
                            }  
                    </TitleContainer>
                </HeaderContainer>
                <Wrap>
                    <BgVideo>
                        {isMainVideoOn && <MainVideo src="video.mp4" muted autoPlay loop />}
                    </BgVideo>

                    <ParticipantsVideoContainer>
                        {meetingParticipants.map((participant) => {
                            return (
                                <ParticipantsBox key={`${participant.name} - ${participant.id}`}>
                                    <ParticipantsData>
                                        <ParticipantImage src={participant.image} alt={participant.name}/>
                                        <ParticipanteName>{participant.name}</ParticipanteName>
                                    </ParticipantsData>
                                </ParticipantsBox>
                            )
                        })}
                    </ParticipantsVideoContainer>
                </Wrap>

                <MenuContainer>
                    { menuIconsList.map((menuIcon) => {
                        if(checkState(menuIcon.state)) {
                            return (
                                <MenuItemContainer>
                                    < menuIcon.icon
                                        size={menuIcon.size}
                                        color={menuIcon.color}
                                        className="menuIcon"
                                        onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                        title={menuIcon.tooltip}
                                    />
                                </MenuItemContainer>
                            )
                        } else {
                            return (
                                <MenuItemContainer>
                                    < menuIcon.iconOff
                                        size={menuIcon.size}
                                        color={menuIcon.color}
                                        className="menuIcon"
                                        onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                        title={menuIcon.tooltip}
                                    />
                                </MenuItemContainer>
                            )
                        }
                    })}
                </MenuContainer>    
            </LeftContainer> 
            <RigthContainer>
                <HeaderChat>
                    <p>Chat</p>
                </HeaderChat>
                <ChatContainerBody>
                    {chatMessagesList.map((message) => {
                        return (
                            <MessageContainer>
                                <MessageImage src="bruna.jpeg" alt={message.participantName} />
                                <MessageContentContainer>
                                    <MessageParticipantName>{message.participantName}</MessageParticipantName>
                                    <Message>{message.content}</Message>
                                </MessageContentContainer>
                            </MessageContainer>
                        )
                    })}
                </ChatContainerBody>
                <MessageChatContainer>
                    <MessageChat>
                        <TextField
                            className="inputMessage"
                            value={messageContent}
                            id="outlined-basic"
                            label="Escreva sua mensagem"
                            variant="outlined"
                            size="small"
                            onChange={(e) => setMessageContent(e.target.value)}
                        />
                        <MessageButton onClick={() => addMessage()}><MdSend size={20}/></MessageButton>
                    </MessageChat>
                </MessageChatContainer>
            </RigthContainer>
        </WebnarContainer>
    )
}

export default Webnar;