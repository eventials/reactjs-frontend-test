import React, { useState } from 'react';
import { MdAirplay } from 'react-icons/md';
import { RiUserAddLine } from 'react-icons/ri';
import { AiOutlineControl } from 'react-icons/ai';
import { MdSend } from 'react-icons/md';
import { HiOutlineUserRemove } from 'react-icons/hi';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ParticipantAllowedMessageContainer, WebnarContainer } from "./styles";
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
        } else if (!allowed) {
            setParticipantWantsJoin(false)
            setPaticipantAllowedMessage("Participante foi recusado")
            setParticipantWasAllowed(false)
        }
    }

    return (
        <WebnarContainer>
            <div className="leftContainer">
                <div className="headerContainer">
                    <img src="logo.png" alt="logo" className="logo"/>
                    <div className="titleContainer">
                        <div className="title">
                            <span>UX/UI Design Conference Meeting</span>
                        </div>
                            {participantWantsJoin &&
                                 <div className="joinParticipantContainer">
                                    <span>Participante deseja entrar na sala</span>
                                    <div className="headerIconsContainer">
                                        <RiUserAddLine
                                            size={30}
                                            color="#FFBD2D"
                                            title="Aceitar participante"
                                            onClick={() => handleAllowParticipantJoin(true)}
                                            />
                                    </div> 
                                    <div className="headerIconsContainer">
                                        <HiOutlineUserRemove size={30}
                                            color="#FF0049"
                                            title="Recusar participante"
                                            onClick={() => handleAllowParticipantJoin(false)}
                                        />
                                        
                                    </div>
                                </div>
                            }
                            {paticipantAllowedMessage !== "" &&
                                <ParticipantAllowedMessageContainer color={participantWasAllowed ? "#FFBD2D" : "#FF0049"} className="participantAllowedMessageContainer">
                                    <span>{paticipantAllowedMessage}</span>
                                </ParticipantAllowedMessageContainer>
                            }  
                    </div>
                </div>
                <div className="wrap">
                    <div className="bg-video">
                        {isMainVideoOn && <video src="video.mp4" className="mainVideo" muted autoPlay loop />}
                    </div>

                    <div className="participantsVideoContainer">
                        {meetingParticipants.map((participant) => {
                            return (
                                <div className="participantsBox" key={`${participant.name} - ${participant.id}`}>
                                    <div className="participantsData">
                                        <img className="participantImage" src={participant.image} alt={participant.name}/>
                                        <p className="participanteName">{participant.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="menuContainer">
                    { menuIconsList.map((menuIcon) => {
                        if(checkState(menuIcon.state)) {
                            return (
                                <div className="menuItemContainer">
                                    < menuIcon.icon
                                        size={menuIcon.size}
                                        color={menuIcon.color}
                                        className="menuIcon"
                                        onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                        title={menuIcon.tooltip}
                                    />
                                </div>
                            )
                        } else {
                            return (
                                <div className="menuItemContainer">
                                    < menuIcon.iconOff
                                        size={menuIcon.size}
                                        color={menuIcon.color}
                                        className="menuIcon"
                                        onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                        title={menuIcon.tooltip}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>    
            </div> 
            <div className="rigthContainer">
                <div className="headerChat">
                    <p>Chat</p>
                </div>
                <div className="chatContainerBody">
                    {chatMessagesList.map((message) => {
                        return (
                            <div className="messageContainer">
                                <img className="messageImage" src="bruna.jpeg" alt={message.participantName} />
                                <div className="messageContentContainer">
                                    <span className="messageParticipantName">{message.participantName}</span>
                                    <span className="message">{message.content}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="messageChatContainer">
                    <div className="messageChat">
                        <TextField
                            className="inputMessage"
                            value={messageContent}
                            id="outlined-basic"
                            label="Escreva sua mensagem"
                            variant="outlined"
                            size="small"
                            onChange={(e) => setMessageContent(e.target.value)}
                        />
                        <button className="sendMessageButton" onClick={() => addMessage()}><MdSend size={20}/></button>
                    </div>
                </div>
            </div>
        </WebnarContainer>
    )
}

export default Webnar;