import { Container, ProfileUser } from "./styles";
import ReactPlayer from "react-player";

interface user {
  name: string;
}

interface playerConfig {
  mute: boolean;
  showVideo: boolean;
}

interface userCardProps {
  playerConfig: playerConfig;
}

export default function OwnerCard({ playerConfig }: userCardProps) {
  return (
    <Container>
      {playerConfig.showVideo ? (
        <ReactPlayer
          url={
            "https://www.youtube.com/watch?v=Qq3OiHQ-HCU&ab_channel=KonstantinosKazakos"
          }
          controls={false}
          width="100%"
          height="100%"
          muted={playerConfig.mute}
        />
      ) : (
        <ProfileUser>U</ProfileUser>
      )}
    </Container>
  );
}
