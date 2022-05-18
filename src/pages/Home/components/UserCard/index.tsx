import { CloseIcon, Container, ProfileUser } from "./styles";
import { useState } from "react";

interface user {
  name: string;
  id: string;
}

interface userCardProps {
  user: user;
  onDeleteUser: (id: string) => void;
}

export default function UserCard({ user, onDeleteUser }: userCardProps) {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  function getFirstLetterName() {
    return user?.name.charAt(0).toUpperCase();
  }

  return (
    <Container
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      {isMouseEnter && (
        <CloseIcon onClick={() => onDeleteUser && onDeleteUser(user.id)} />
      )}
      <ProfileUser>{getFirstLetterName()}</ProfileUser>
    </Container>
  );
}
