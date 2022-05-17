import UserCard from "./components/UserCard";
import {
  ActionsWrapper,
  Container,
  OwnerWrapper,
  UsersWrapper,
  IconContainer,
  ArrowIcon,
} from "./styles";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import ModalAddUser from "./components/ModalAddUser";
import { config } from "process";
import { UserContext } from "context";
import { useCookie } from "hooks/useCookie";
import { useNavigate } from "react-router-dom";

interface user {
  name: string;
}
interface playerConfig {
  mute: boolean;
  showVideo: boolean;
}

type ActionType = "mute" | "showVideo";

type PlayerConfig = Record<ActionType, boolean>;

export default function Home() {
  const { usersList, setUsersList } = useContext(UserContext);
  const [cookie] = useCookie({
    key: "auth_token",
  });
  const navigate = useNavigate();

  const [toggleModal, setToggleModal] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [playerConfig, setPlayerConfig] = useState<PlayerConfig>({
    mute: false,
    showVideo: true,
  });

  const actions = [
    {
      activeIcon: <BsFillCameraVideoFill />,
      disabledIcon: <BsFillCameraVideoOffFill />,
      value: "showVideo" as ActionType,
      onClick: () =>
        setPlayerConfig((prev) => ({
          ...prev,
          showVideo: !prev.showVideo,
        })),
    },
    {
      activeIcon: <BsFillMicFill />,
      disabledIcon: <BsFillMicMuteFill />,
      value: "mute" as ActionType,
      onClick: () => setPlayerConfig((prev) => ({ ...prev, mute: !prev.mute })),
    },
  ];

  useEffect(() => {
    if (!cookie) {
      navigate("/");
    }
  }, []);

  function onAddUser(name: string) {
    setUsersList((prev) => [...prev, { name }]);
    setToggleModal(false);
  }

  function onDeleteUser(index: number) {
    setUsersList((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <Container>
      <OwnerWrapper showUsers={showUsers}>
        <ArrowIcon
          size="30px"
          showUsers={showUsers}
          onClick={() => setShowUsers(!showUsers)}
        />
        <UserCard isOwner={true} index={0} playerConfig={playerConfig} />

        <ActionsWrapper>
          {actions.map((action) => (
            <IconContainer onClick={action.onClick}>
              {playerConfig[action.value]
                ? action.activeIcon
                : action.disabledIcon}
            </IconContainer>
          ))}

          <button onClick={() => setToggleModal(true)}>add</button>
        </ActionsWrapper>
      </OwnerWrapper>

      <UsersWrapper showUsers={showUsers}>
        {usersList.length > 0 &&
          usersList.map((user, index) => (
            <UserCard
              isOwner={false}
              user={user}
              onDeleteUser={onDeleteUser}
              index={index}
              playerConfig={playerConfig}
            />
          ))}
      </UsersWrapper>

      {toggleModal && (
        <ModalAddUser
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          onAddUser={onAddUser}
        />
      )}
    </Container>
  );
}
