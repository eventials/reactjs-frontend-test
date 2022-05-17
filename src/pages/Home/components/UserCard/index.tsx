import { CloseIcon, Container, ProfileUser } from "./styles";
import ReactPlayer from "react-player";

interface user {
  name: string;
}

interface playerConfig {
  mute: boolean;
  showVideo: boolean;
}

interface userCardProps {
  isOwner?: boolean;
  user?: user;
  index: number;
  onDeleteUser?: (index: number) => void;
  playerConfig: playerConfig;
}

export default function UserCard({
  isOwner,
  user,
  index,
  onDeleteUser,
  playerConfig,
}: userCardProps) {
  function getFirstLetterName() {
    return user?.name.charAt(0).toUpperCase();
  }

  return (
    <Container isOwner={isOwner}>
      {!isOwner && (
        <>
          <CloseIcon onClick={() => onDeleteUser && onDeleteUser(index)} />
          <ProfileUser>{getFirstLetterName()}</ProfileUser>
        </>
      )}

      {isOwner && (
        <>
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
            <ProfileUser>{getFirstLetterName()}</ProfileUser>
          )}
        </>
      )}
    </Container>
  );
}
