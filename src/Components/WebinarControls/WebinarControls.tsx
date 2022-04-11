import { useState } from 'react';
import { FiPhoneOff } from 'react-icons/fi';
import { BsMicMute, BsMic } from 'react-icons/bs';
import {
  Container,
  InnerControlContainer,
  ControlCircleButton
} from './WebinarControlsStyles';

interface WebinarControlsProps {
  onHangup: () => void;
}

const WebinarControls: React.FC<WebinarControlsProps> = ({ onHangup }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Container>
      <InnerControlContainer>
        <ControlCircleButton onClick={() => setIsMuted(!isMuted)} isMuted={isMuted}>
          {isMuted ? (
            <BsMicMute color='black' />
          ) : (
            <BsMic />
          )}
        </ControlCircleButton>
        <ControlCircleButton onClick={() => onHangup()} danger>
          <FiPhoneOff />
        </ControlCircleButton>
      </InnerControlContainer>
    </Container>
  );
}

export default WebinarControls;
