import React from 'react';
import { Container, Logo, Title, TitleContainer } from './styles';
import JoinParticipantContainer from '../JoinParticipantContainer';
import ParticipantAllowedMessageContainer from '../ParticipantAllowedMessageContainer';

interface IHeaderContainer {
    participantWantsJoin: boolean;
    handleAllowParticipantJoin: (allowed: boolean) => void;
    participantWasAllowed: boolean;
    paticipantAllowedMessage: string;
}

const HeaderContainer: React.FC<IHeaderContainer> = ({
    participantWantsJoin, handleAllowParticipantJoin, participantWasAllowed, paticipantAllowedMessage
}) => {
    return (
        <Container>
            <Logo src="logo.png" alt="logo" />
            <TitleContainer>
                <Title>
                    <span>Webinar de Desenvolvimento de Produto</span>
                </Title>
                    {participantWantsJoin &&
                        <JoinParticipantContainer handleAllowParticipantJoin={handleAllowParticipantJoin}/>  
                    }
                    {paticipantAllowedMessage !== "" &&
                        <ParticipantAllowedMessageContainer
                            participantWasAllowed={participantWasAllowed}
                            paticipantAllowedMessage={paticipantAllowedMessage}
                        />
                    }  
            </TitleContainer>
      </Container>
    );
}

export default HeaderContainer;
