import UserCard from "./components/UserCard";
import {
  ActionsWrapper,
  Container,
  OwnerWrapper,
  UsersWrapper,
  IconContainer,
  ArrowIcon,
  UsersContainer,
} from "./styles";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from "react-icons/bs";
import { RiShutDownLine } from "react-icons/ri";

import { useContext, useEffect, useState } from "react";
import ModalAddUser from "./components/ModalAddUser";
import { UserContext } from "context";
import { useCookie } from "hooks/useCookie";
import { useNavigate } from "react-router-dom";
import OwnerCard from "./components/OwnerCard";
import { v4 as uuid } from "uuid";

type ActionType = "mute" | "showVideo";

type PlayerConfig = Record<ActionType, boolean>;

export default function Home() {
  const navigate = useNavigate();

  const { usersList, setUsersList } = useContext(UserContext);
  const [cookie, setCookie] = useCookie({
    key: "auth_token",
  });

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

  useEffect(() => {
    if (usersList.length === 0) {
      setShowUsers(false);
    } else {
      setShowUsers(true);
    }
  }, [usersList]);

  useEffect(() => {
    function listener(event: KeyboardEvent) {
      if (event.key === "u") {
        setToggleModal(true);
        event.preventDefault();
      }
    }

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  function onAddUser(name: string) {
    setUsersList((prev) => [...prev, { name, id: uuid() }]);
    setToggleModal(false);
  }

  function onDeleteUser(id: string) {
    setUsersList((prev) => prev.filter((user) => user.id !== id));
  }

  function onShutdownCall() {
    setCookie("");
    setUsersList([]);
    navigate("/");
  }

  return (
    <Container>
      <OwnerWrapper showUsers={showUsers}>
        {usersList.length > 0 && (
          <ArrowIcon
            size="30px"
            showUsers={showUsers}
            onClick={() => setShowUsers(!showUsers)}
          />
        )}

        <OwnerCard playerConfig={playerConfig} />

        <ActionsWrapper>
          {actions.map((action) => (
            <IconContainer onClick={action.onClick} key={action.value}>
              {playerConfig[action.value]
                ? action.activeIcon
                : action.disabledIcon}
            </IconContainer>
          ))}

          <IconContainer
            onClick={() => onShutdownCall()}
            style={{ background: "red" }}
          >
            <RiShutDownLine size="21px" />
          </IconContainer>
        </ActionsWrapper>
      </OwnerWrapper>

      <UsersContainer showUsers={showUsers}>
        <UsersWrapper showUsers={showUsers}>
          {usersList.length > 0 &&
            usersList.map((user) => (
              <UserCard user={user} onDeleteUser={onDeleteUser} key={user.id} />
            ))}
        </UsersWrapper>
      </UsersContainer>

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
