import React, { useState } from 'react';
import { MdAirplay } from 'react-icons/md';
import { RiUserAddLine } from 'react-icons/ri';
import { AiOutlineControl } from 'react-icons/ai';
import { MdSend } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { WebnarContainer } from "./styles";
import { chatMessages, menuIconsList, participants } from './data';

const Webnar: React.FC = () => {
    const [messageContent, setMessageContent] = useState("")
    const [chatMessagesList, setChatMessagesList] = useState(chatMessages)
    const [isMainVideoOn, setIsMainVideoOn] = useState(false)
    const [isMicrophoneOn, setIsMicrophoneOn] = useState(false)
    const [isShareScreenOn, setIsShareScreenOn] = useState(true)
    const [isVolumeOn, setIsVolumeOn] = useState(false)


    const addMessage = () => {
        setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Participante 1"}])
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

    return (
        <WebnarContainer>
            <div className="leftContainer">
                <div className="headerContainer">
                    <MdAirplay size={30} color="#FF0049" className="logoContainer"/>
                    <div className="titleContainer">
                        <div className="title">
                            <span>UX/UI Design Conference Meeting</span>
                        </div>
                        <div className="headerIconsContainer">
                            <RiUserAddLine
                                size={30}
                                color="#FFBD2D"
                                title="Adicionar participante"
                            />
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="bg-video">
                        {isMainVideoOn && <video src="video.mp4" className="mainVideo" muted autoPlay loop />}
                    </div>

                    <div className="participantsVideoContainer">
                        {participants.map((participant) => {
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
                    <Button className="sendMessageButton" variant="contained" color="primary" onClick={() => addMessage()}>
                        <MdSend />
                    </Button>
                    </div>
                </div>
            </div>
        </WebnarContainer>
    )
}

export default Webnar;