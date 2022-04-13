import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";
import endCallICon from "../../assets/end-call.svg";

import {
  ActionWrapper,
  Container,
  Icon,
  IconButton,
  VideoGridWrapper,
} from "./styles";
import { useOwner } from "../../hooks/useOwner";
import { VideoModal } from "../../components/VideoModal";

export function Webinar() {
  const { endWebinar } = useOwner();

  function handleEndWebinar() {
    endWebinar();
  }

  return (
    <Container>
      <VideoGridWrapper>
        <VideoModal src={gif1} alt="video" />
        <VideoModal src={gif2} alt="video" />
        <VideoModal src={gif3} alt="video" />
        <VideoModal src={gif4} alt="video" />
      </VideoGridWrapper>
      <ActionWrapper>
        <IconButton type="button" onClick={handleEndWebinar}>
          <Icon src={endCallICon} alt="Encerrar webinar" />
        </IconButton>
      </ActionWrapper>
    </Container>
  );
}
