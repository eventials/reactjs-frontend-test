import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import {
    WebinarContainer,
    RigthContainer,
    HeaderChat,
    ChatContainerBody
} from "./styles";
import { chatMessages, menuIconsList, participants } from './data';
import MessageChatContainer from './components/MessageChatContainer'
import MessageContainer from './components/MessageContainer'
import LeftContainer from './components/LeftContainer'

interface IMeetingParticipant {
    id: number;
    name: string;
    image: string;
    isVideoOn: boolean;
}

const Webinar: React.FC = () => {
    const getInitialParticipants = () => {
        const participantsFromCurrentMeeting = localStorage.getItem('participants')
        if (participantsFromCurrentMeeting !== null) {
            const currentParticipantIds = JSON.parse(participantsFromCurrentMeeting).ids
            const initialParticipants = participants.filter((participant) => currentParticipantIds.includes(participant.id))
            return initialParticipants
        }
        return []
    }
    
    const [meetingParticipants, setMeetingParticipants] = useState<IMeetingParticipant[]>(getInitialParticipants())
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
            setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Rita"}])
            setMessageContent("")
        }
    });

    const addMessage = () => {
        if(messageContent !== "") {
            setChatMessagesList([...chatMessagesList, {content: messageContent, participantName: "Eu"}])
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
            case "handleExit":
                handleExit();
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
            localStorage.setItem('participants', JSON.stringify({ids: [...participantsIds, newParticipantId]}))
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
            const filteredParticipants = meetingParticipants.filter((participant) => participant.id !== participantId)
            setMeetingParticipants(filteredParticipants)
            const participantsIds = filteredParticipants.map((participant) => participant.id)
            localStorage.setItem('participants', JSON.stringify({ids: participantsIds}))
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

    const handleExit = () => {
        const cookie = new Cookies()
        cookie.remove("auth_token")
        localStorage.removeItem("participants")
        if(window.confirm("Deseja sair da reunião?")) {
            window.location.assign('/login');
        }
    }

    return (
        <WebinarContainer>
            <LeftContainer
                participantWantsJoin={participantWantsJoin}
                handleAllowParticipantJoin={handleAllowParticipantJoin}
                participantWasAllowed={participantWasAllowed}
                paticipantAllowedMessage={paticipantAllowedMessage}
                isMainVideoOn={isMainVideoOn}
                meetingParticipants={meetingParticipants}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                isShowRemoveUser={isShowRemoveUser}
                participantIdHover={participantIdHover}
                handleParticipantVideoToggle={handleParticipantVideoToggle}
                handleRemoveParticipant={handleRemoveParticipant}
                menuIconsList={menuIconsList}
                checkState={checkState}
                handleClickMenuIcon={handleClickMenuIcon}
            />
            <RigthContainer>
                <HeaderChat>
                    <p>Chat</p>
                </HeaderChat>
                <ChatContainerBody>
                    {chatMessagesList.map((message) => {
                        return (
                            <MessageContainer message={message} />
                        )
                    })}
                </ChatContainerBody>
                <MessageChatContainer
                    messageContent={messageContent}
                    setMessageContent={setMessageContent}
                    addMessage={addMessage}
                />
            </RigthContainer>
        </WebinarContainer>
    )
}

export default Webinar;
