import React from 'react'
import { TextField } from '@material-ui/core';
import { MdSend } from 'react-icons/md';
import { Container, MessageButton, MessageChat } from './styles';

interface IMessageChat {
    messageContent: string;
    setMessageContent: (value: React.SetStateAction<string>) => void;
    addMessage: () => void;
}

const MessageChatContainer: React.FC<IMessageChat> = ({
    messageContent, setMessageContent, addMessage
}) => {
    return (
        <Container>
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
        </Container>
    );
}

export default MessageChatContainer;
