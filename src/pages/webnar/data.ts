import { BsChat, BsMic, BsMicMute } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { FiVideo, FiVideoOff, FiVolume2, FiVolumeX } from "react-icons/fi"
import { IoExitOutline, IoVideocamOutline } from "react-icons/io5"
import { FaRegWindowClose } from "react-icons/fa"

export const participants = [
    {id: 1, name: "Beto", image: "participant1.jpg"},
    {id: 2, name: "Raul", image: "participant2.jpg"},
    {id: 3, name: "Paula", image: "participant3.jpg"},
    {id: 4, name: "Fernanda", image: "participant4.jpg"},
    {id: 5, name: "Mariana", image: "participant5.jpg"},
]

export let chatMessages = [
    {content: "oi, que legal", participantName: "participante1"},
    {content: "que bom nẽ", participantName: "participante1"},
    {content: "", participantName: "participante1"},
    {content: "", participantName: "participante1"},
]

export let menuIconsList = [
    {state: "isVideoOn", icon: FiVideo, iconOff: FiVideoOff, size: 35, color: "#6200FF", handleClick: "handleCamera", tooltip: "Câmera"},
    {state: "isMicrophoneOn", icon: BsMic, iconOff: BsMicMute, size: 30, color: "#FFBD2D", handleClick: "handleAudio", tooltip: "Microfone"},
    {state: "isShareScreenOn", icon: CgScreen, iconOff: FaRegWindowClose, size: 35, color: "#FF0049", handleClick: "handleShareScreen", tooltip: "Comparilhar Tela"},
    {state: "isVolumeOn", icon: FiVolume2, iconOff: FiVolumeX, size: 30, color: "#FF90BB", handleClick: "handleVolume", tooltip: "Som"},
    {state: "", icon: IoExitOutline, iconOff: IoExitOutline, size: 35, color: "#8C00FF", handleClick: "handleExit", tooltip: "Sair"}
]