import React from 'react'
import { HiOutlineUserRemove } from 'react-icons/hi';
import { RiUserAddLine } from 'react-icons/ri';
import {Container, JoinParticipandMessage, HeaderIconsContainer} from "./styles";

interface IJoinParticipantContainer {
    handleAllowParticipantJoin: (allowed: boolean) => void
}

const JoinParticipantContainer: React.FC<IJoinParticipantContainer> = ({handleAllowParticipantJoin}) => {
    return (
        <Container>
            <JoinParticipandMessage>Participante deseja entrar na sala</JoinParticipandMessage>
            <HeaderIconsContainer>
                <RiUserAddLine
                    size={30}
                    color="#FFBD2D"
                    title="Aceitar participante"
                    onClick={() => handleAllowParticipantJoin(true)}
                />
            </HeaderIconsContainer> 
            <HeaderIconsContainer>
                <HiOutlineUserRemove
                    size={30}
                    color="#FF0049"
                    title="Recusar participante"
                    onClick={() => handleAllowParticipantJoin(false)}
                />
            </HeaderIconsContainer>
        </Container>
    );
}

export default JoinParticipantContainer;
