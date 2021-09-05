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
    JoinParticipandMessage,
    HeaderIconsContainer,
    ParticipantAllowedMessageContainer,
    Wrap,
    BgVideo,
    MainVideo,
    ParticipantsVideoContainer,
    ParticipantsBox,
    ParticipantsData,
    ParticipantVideo,
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
    RemoveParticipantButton,
    ParticipantButtonsContainer,
    TurnParticipantScreenOff,
} from "./styles";
import { chatMessages, menuIconsList, participants } from './data';
import { FaRegWindowClose } from 'react-icons/fa';
import { CgScreen } from 'react-icons/cg';

interface IMeetingParticipant {
    id: number;
    name: string;
    image: string;
    isVideoOn: boolean;
}

const Webnar: React.FC = () => {
    const [meetingParticipants, setMeetingParticipants] = useState<IMeetingParticipant[]>([])
    const [messageContent, setMessageContent] = useState("")
    const [chatMessagesList, setChatMessagesList] = useState(chatMessages)
    const [isMainVideoOn, setIsMainVideoOn] = useState(true)
    const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
    const [isShareScreenOn, setIsShareScreenOn] = useState(true)
    const [isVolumeOn, setIsVolumeOn] = useState(false)
    const [participantWantsJoin, setParticipantWantsJoin] = useState(false)
    const [paticipantAllowedMessage, setPaticipantAllowedMessage] = useState("")
    const [participantWasAllowed, setParticipantWasAllowed] = useState(false)
    const [isShowRemoveUser, setIsShowRemoveUser] = useState(false)
    const [participantIdHover, setParticipantIdHover] = useState(0)

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
        if(allowed && meetingParticipants.length < 12) {
            setParticipantWantsJoin(false)
            const newParticipantId = meetingParticipants.length+1
            setMeetingParticipants([...meetingParticipants, participants[meetingParticipants.length]])
            setPaticipantAllowedMessage("Participante entrou na sala")
            setParticipantWasAllowed(true)
            setTimeout(() => setPaticipantAllowedMessage(""), 5000)
            const participantsIds = meetingParticipants.map((participant) => participant?.id)
            localStorage.setItem('participant', JSON.stringify({ids: [...participantsIds, newParticipantId]}))
        } else if (!allowed) {
            setParticipantWantsJoin(false)
            setPaticipantAllowedMessage("Participante foi recusado")
            setParticipantWasAllowed(false)
            setTimeout(() => setPaticipantAllowedMessage(""), 5000)
        }
    }

    const handleMouseEnter = (participantId: number) => {
        setParticipantIdHover(participantId)
        setIsShowRemoveUser(true)
    }

    const handleMouseLeave = () => {
        setIsShowRemoveUser(false)
    }

    const handleRemoveParticipant = (participantId: number) => {
        if(window.confirm("Deseja remover participante?")) {
            setMeetingParticipants(meetingParticipants.filter((participant) => participant.id !== participantId))
        }
    }

    const handleParticipantVideoToggle = (participantId: number) => {
        const newParticipantsArray = meetingParticipants.map((participant) => {
            if(participant.id === participantId) {
                participant.isVideoOn = !participant.isVideoOn
            }
            return participant
        })
        setMeetingParticipants(newParticipantsArray)
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
                                    <JoinParticipandMessage>Participante deseja entrar na sala</JoinParticipandMessage>
                                    <HeaderIconsContainer>
                                        <RiUserAddLine
                                            size={30}
                                            color="#FFBD2D"
                                            title="Aceitar participante"
                                            onClick={() => handleAllowParticipantJoin(true)}
                                            />
                                    </HeaderIconsContainer> 
                                    <HeaderIconsContainer>
                                        <HiOutlineUserRemove
                                            size={30}
                                            color="#FF0049"
                                            title="Recusar participante"
                                            onClick={() => handleAllowParticipantJoin(false)}
                                        />
                                        
                                    </HeaderIconsContainer>
                                </JoinParticipantContainer>
                            }
                            {paticipantAllowedMessage !== "" &&
                                <ParticipantAllowedMessageContainer
                                    color={participantWasAllowed ? "#FFBD2D" : "#FF0049"}
                                >
                                    <span>{paticipantAllowedMessage}</span>
                                </ParticipantAllowedMessageContainer>
                            }  
                    </TitleContainer>
                </HeaderContainer>
                <Wrap>
                    <BgVideo>
                        <MainVideo src={isMainVideoOn ? "video.mp4": ""} muted autoPlay loop/>
                    </BgVideo>

                    <ParticipantsVideoContainer>
                        {meetingParticipants.map((participant) => {
                            return (
                                <ParticipantsBox
                                    key={`${participant.name} - ${participant.id}`}
                                    onMouseEnter={() => handleMouseEnter(participant.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {(isShowRemoveUser && participant.id === participantIdHover) &&
                                        <ParticipantButtonsContainer>
                                            <TurnParticipantScreenOff
                                                title={participant.isVideoOn ? "Desligar vídeo" : "Ligar vídeo"}
                                                onClick={() => handleParticipantVideoToggle(participant.id)}
                                            >
                                                {participant.isVideoOn ? 
                                                    <FaRegWindowClose color="#FF0049" size={30}/>
                                                    :
                                                    <CgScreen color="#FF0049" size={30}/>
                                                }
                                                
                                            </TurnParticipantScreenOff>
                                            <RemoveParticipantButton
                                                title="Remover participante"
                                                onClick={() => handleRemoveParticipant(participant.id)}
                                            >
                                                X
                                            </RemoveParticipantButton>
                                        </ParticipantButtonsContainer>
                                    }
                                    <ParticipantsData>
                                        <ParticipantVideo src={participant.isVideoOn ? participant.image : ""} muted autoPlay loop/>
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