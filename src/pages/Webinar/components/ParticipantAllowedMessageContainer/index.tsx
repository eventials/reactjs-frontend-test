import React from 'react'
import { Container } from './styles'

interface IParticipantAllowedMessageContainer {
    participantWasAllowed: boolean, 
    paticipantAllowedMessage: string
}

const ParticipantAllowedMessageContainer: React.FC<IParticipantAllowedMessageContainer> = ({
    participantWasAllowed, paticipantAllowedMessage
}) => {
    return (
        <Container color={participantWasAllowed ? "#FFBD2D" : "#FF0049"} >
            <span>{paticipantAllowedMessage}</span>
        </Container>
    );
}

export default ParticipantAllowedMessageContainer;
