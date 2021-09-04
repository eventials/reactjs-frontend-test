import React, { useState } from 'react';
import { MdAirplay } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { AiOutlineControl } from 'react-icons/ai';
import { IoVideocamOutline } from 'react-icons/io5';
import { BsMic } from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';
import { BsChat } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdSend } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { WebnarContainer } from "./styles";
import { chatMessages, menuIconsList, participants } from './data';

const Webnar: React.FC = () => {
    const [messageContent, setMessageContent] = useState("")
    const [chatMessagesList, setChatMessagesList] = useState(chatMessages)

    const addMessage = () => {
        setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Participante 1"}])
    }

    return (
        <WebnarContainer>
            <div className="leftContainer">
                <div className="headerContainer">
                    <MdAirplay size={30} color="#FF0049" className="logoContainer"/>
                    <div className="titleContainer">
                        <div className="title">
                            <span>UX/UI Design Conference Meeting</span>
                            <span>Productivity</span>
                        </div>
                        <div className="headerIconsContainer">
                            <FiShare size={30} color="#FFBD2D"/>
                            <AiOutlineControl size={30} color="#6200FF"/>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="bg-video">
                        <video src="video.mp4" className="mainVideo" muted autoPlay loop />
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
                        return (
                            <div className="menuItemContainer">
                                < menuIcon.icon
                                    size={menuIcon.size}
                                    color={menuIcon.color}
                                    className="menuIcon"
                                />
                            </div>
                        )
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