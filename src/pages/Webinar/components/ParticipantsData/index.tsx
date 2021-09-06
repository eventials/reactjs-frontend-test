import React from 'react'
import {Container, ParticipanteName, ParticipantVideo} from './styles'

interface IParticipantsData {
    participant: any;
}

const ParticipantsData: React.FC<IParticipantsData> = ({ participant }) => {
    return (
        <Container>
            <ParticipantVideo src={participant.isVideoOn ? participant.image : ""} muted autoPlay loop/>
            <ParticipanteName>{participant.name}</ParticipanteName>
        </Container>
    );
}

export default ParticipantsData;
