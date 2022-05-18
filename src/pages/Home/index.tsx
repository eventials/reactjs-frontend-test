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
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import OwnerCard from "./components/OwnerCard";
import { v4 as uuid } from "uuid";
import ModalUserRequest from "./components/ModalUserRequest";
import { AuthContext } from "context/AuthContext";
import ModalAlertOwner from "./components/ModalAlertOwner";

type ActionType = "mute" | "showVideo";

type PlayerConfig = Record<ActionType, boolean>;

export default function Home() {
  const navigate = useNavigate();

  const { usersList, setUsersList } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);

  const [openModalAlertUser, setOpenModalAlertUser] = useState(false);
  const [toggleModalAddUser, setToggleModalAddUser] = useState(false);
  const [openModalUserRequest, setOpenModalUserRequest] = useState(false);
  const [showUsers, setShowUsers] = useState(true);
  const [requestedUser, setRequestedUser] = useState<string | null>(null);
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
    if (usersList.length === 0) {
      setShowUsers(false);
    } else {
      setShowUsers(true);
    }
  }, [usersList]);

  useEffect(() => {
    function listener(event: KeyboardEvent) {
      if (event.key === "u") {
        const target = event.target as HTMLElement;

        if (!["INPUT", "TEXTAREA"].includes(target.nodeName)) {
          setToggleModalAddUser(true);
          setOpenModalAlertUser(false)
          event.preventDefault();
        }
      }
    }

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    setOpenModalAlertUser(true);
  }, []);

  function onAddUser(name: string) {
    if (!name) return;

    setRequestedUser(name);
    setToggleModalAddUser(false);
    setOpenModalUserRequest(true);
  }

  function onDeleteUser(id: string) {
    setUsersList((prev) => prev.filter((user) => user.id !== id));
  }

  function onShutdownCall() {
    setToken(null);
    setUsersList([]);
    navigate("/");
  }

  function onAcceptUser(name: string) {
    setUsersList((prev) => [...prev, { name: name, id: uuid() }]);
    setOpenModalUserRequest(false);
  }

  function onRejectUser() {
    setOpenModalUserRequest(false);
    setRequestedUser(null);
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

      {openModalAlertUser && (
        <ModalAlertOwner
          toggleModal={openModalAlertUser}
          setToggleModal={setOpenModalAlertUser}
        />
      )}

      {openModalUserRequest && (
        <ModalUserRequest
          toggleModal={openModalUserRequest}
          setToggleModal={setOpenModalUserRequest}
          requestedUser={requestedUser}
          onAcceptUser={onAcceptUser}
          onRejectUser={onRejectUser}
        />
      )}

      {toggleModalAddUser && (
        <ModalAddUser
          toggleModal={toggleModalAddUser}
          setToggleModal={setToggleModalAddUser}
          onAddUser={onAddUser}
        />
      )}
    </Container>
  );
}
