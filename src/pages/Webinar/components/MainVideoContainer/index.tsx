import React from 'react'
import ParticipantButtonsContainer from '../ParticipantButtonsContainer';
import ParticipantsData from '../ParticipantsData'
import { BgVideo, Container, MainVideo, ParticipantsBox, ParticipantsVideoContainer } from './styles';

interface IMeetingParticipant {
    id: number;
    name: string;
    image: string;
    isVideoOn: boolean;
}

interface IMainVideoContainer {
    isMainVideoOn: boolean;
    meetingParticipants: IMeetingParticipant[];
    handleMouseEnter: (participantId: number) => void;
    handleMouseLeave: () => void;
    isShowRemoveUser: boolean;
    participantIdHover: number;
    handleParticipantVideoToggle: (participantId: number) => void;
    handleRemoveParticipant: (participantId: number) => void;
}

const MainVideoContainer: React.FC<IMainVideoContainer> = ({
  isMainVideoOn, meetingParticipants, handleMouseEnter, handleMouseLeave,
  isShowRemoveUser, participantIdHover, handleParticipantVideoToggle, handleRemoveParticipant
}) => {
    return (
        <Container>
            <BgVideo>
                <MainVideo src={isMainVideoOn ? "mainVideo.mp4": ""} muted autoPlay loop/>
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
                                <ParticipantButtonsContainer
                                    participant={participant}
                                    handleParticipantVideoToggle={handleParticipantVideoToggle} 
                                    handleRemoveParticipant={handleRemoveParticipant}
                                />
                            }
                            <ParticipantsData participant={participant} />
                        </ParticipantsBox>
                    )
                })}
            </ParticipantsVideoContainer>
        </Container>
    );
}

export default MainVideoContainer;
