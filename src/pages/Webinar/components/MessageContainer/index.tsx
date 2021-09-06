import React from 'react'
import { Container, Message, MessageContentContainer, MessageImage, MessageParticipantName } from './styles';

interface IMessage {
    content: string;
    participantName: string;
    image: string;
}

interface IMessageContainer {
    message: IMessage
}

const MessageContainer: React.FC<IMessageContainer> = ({ message }) => {
    return (
        <Container>
            <MessageImage src={message.image} alt={message.participantName} />
            <MessageContentContainer>
                <MessageParticipantName>{message.participantName}</MessageParticipantName>
                <Message>{message.content}</Message>
            </MessageContentContainer>
        </Container>
    );
}

export default MessageContainer;
