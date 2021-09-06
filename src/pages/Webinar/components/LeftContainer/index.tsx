import React from 'react'
import MenuContainer from '../MenuContainer'
import HeaderContainer from '../HeaderContainer'
import MainVideoContainer from '../MainVideoContainer'
import { Container } from './styles'
import { IconType } from 'react-icons'

interface IMenuIcon {
  state: string;
  icon: IconType;
  iconOff: IconType;
  size: number;
  color: string;
  handleClick: string;
  tooltip: string;
}

interface IMeetingParticipant {
    id: number;
    name: string;
    image: string;
    isVideoOn: boolean;
}

interface ILeftContainer {
  participantWantsJoin: boolean;
  handleAllowParticipantJoin: (allowed: boolean) => void;
  participantWasAllowed: boolean;
  paticipantAllowedMessage: string;
  isMainVideoOn: boolean;
  meetingParticipants: IMeetingParticipant[];
  handleMouseEnter: (participantId: number) => void;
  handleMouseLeave: () => void;
  isShowRemoveUser: boolean;
  participantIdHover: number;
  handleParticipantVideoToggle: (participantId: number) => void;
  handleRemoveParticipant: (participantId: number) => void;
  menuIconsList: IMenuIcon[];
  checkState: (state: string) => boolean | undefined;
  handleClickMenuIcon: (handleFunction: string) => void;
}

const LeftContainer: React.FC<ILeftContainer> = ({
  participantWantsJoin, handleAllowParticipantJoin, participantWasAllowed, paticipantAllowedMessage,
  isMainVideoOn, meetingParticipants, handleMouseEnter, handleMouseLeave, isShowRemoveUser,
  participantIdHover, handleParticipantVideoToggle, handleRemoveParticipant, menuIconsList,
  checkState, handleClickMenuIcon
}) => {
    return (
        <Container>
            <HeaderContainer
                participantWantsJoin={participantWantsJoin}
                handleAllowParticipantJoin={handleAllowParticipantJoin}
                participantWasAllowed={participantWasAllowed}
                paticipantAllowedMessage={paticipantAllowedMessage}
            />
            <MainVideoContainer
                isMainVideoOn={isMainVideoOn}
                meetingParticipants={meetingParticipants}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                isShowRemoveUser={isShowRemoveUser}
                participantIdHover={participantIdHover}
                handleParticipantVideoToggle={handleParticipantVideoToggle}
                handleRemoveParticipant={handleRemoveParticipant}
            />
            <MenuContainer
                menuIconsList={menuIconsList}
                checkState={checkState}
                handleClickMenuIcon={handleClickMenuIcon}
            />
        </Container> 
    );
}

export default LeftContainer;
