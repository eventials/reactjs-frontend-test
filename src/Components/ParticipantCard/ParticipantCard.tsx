import { Text } from "@chakra-ui/react";
import { Participant } from "../../context/WebinarStore";
import { CloseButton, ImageContainer, InnerCard, StyledImage } from "./ParticipantCardStyles";
import { BsTrash } from "react-icons/bs";
import { Tooltip } from '@chakra-ui/react';


interface ParticipantCardProps {
  participant: Participant;
  onRemove: (...args: any) => void;
}

const PartipantCard: React.FC<ParticipantCardProps> = ({ participant, onRemove }) => {
  return (
    <InnerCard>
      <ImageContainer onClick={() => onRemove(participant)}>
        <StyledImage maxH={80} rounded="full" src={participant.photo} alt={participant.name + ' photo'} />
        <Tooltip 
          label="Remover da reunião" 
          bg='gray.700' 
          color='white' 
          fontWeight='bold'
        >
          <CloseButton><BsTrash /></CloseButton>
        </Tooltip>
      </ImageContainer>
      <Text mt={10} color="whiteAlpha.800" fontWeight='bold' fontSize={'3xl'}>{participant.name}</Text>
    </InnerCard>
  );
}

export default PartipantCard;
