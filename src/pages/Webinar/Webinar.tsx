
import { Button, Stack } from "@chakra-ui/react";
import faker from "@faker-js/faker";
import { useCallback } from "react";
import PartipantCard from "../../Components/ParticipantCard/ParticipantCard";
import WebinarControls from "../../Components/WebinarControls/WebinarControls";
import { Participant } from "../../context/WebinarStore";
import useWebinar from "../../hooks/useWebinarStore";
import { Container, Wrapper, } from "./WebinarStyles";

const Webinar: React.FC = () => {

  const {
    currentUser,
    participants,
    addParticipant,
    removeParticipant,
    logOut,
  } = useWebinar();

  const handleAddParticipant = useCallback(async () => {
    const name = faker.name.findName();
    const confirmation = window.confirm(`${name} quer entrar na reunião. Permitir?`);
    if (confirmation) {
      await addParticipant(name);
    }
  }, [addParticipant]);

  const handleRemoveParticipant = useCallback((participant: Participant) => {
    const confirmation = window.confirm(`Deseja remover o ${participant.name} da reunião?`);
    if (confirmation) {
      removeParticipant(participant);
    }
  }, [removeParticipant]);

  return (
    <>
      <Stack m={10}>
        <Button onClick={handleAddParticipant}>
          Adicionar Participante
        </Button>
      </Stack>
      <Container>
        <Wrapper cardsQnt={[...participants, currentUser].length}>
          <PartipantCard onRemove={logOut} participant={currentUser} />
          {participants.map((participant, index) => (
            <PartipantCard 
              onRemove={handleRemoveParticipant} 
              participant={participant} 
              key={index} 
            />
          ))}
        </Wrapper>
        <WebinarControls onHangup={logOut} />
      </Container>
    </>
  );
}

export default Webinar;
