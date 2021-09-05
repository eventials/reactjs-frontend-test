import { BsMic, BsMicMute } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { FiVideo, FiVideoOff, FiVolume2, FiVolumeX } from "react-icons/fi"
import { IoExitOutline } from "react-icons/io5"
import { FaRegWindowClose } from "react-icons/fa"

export const participants = [
    {id: 1, name: "Beto", image: "video.mp4", isVideoOn: true},
    {id: 2, name: "Raul", image: "video.mp4", isVideoOn: true},
    {id: 3, name: "Paula", image: "video.mp4", isVideoOn: true},
    {id: 4, name: "Fernanda", image: "video.mp4", isVideoOn: true},
    {id: 5, name: "Mariana", image: "video.mp4", isVideoOn: true},
]

export let chatMessages = [
    {content: "msg1", participantName: "participante1"},
    {content: "msg2", participantName: "participante1"},
    {content: "msg3", participantName: "participante1"},
    {content: "msg4", participantName: "participante1"},
]

export let menuIconsList = [
    {state: "isVideoOn", icon: FiVideo, iconOff: FiVideoOff, size: 35, color: "#6200FF", handleClick: "handleCamera", tooltip: "Câmera"},
    {state: "isMicrophoneOn", icon: BsMic, iconOff: BsMicMute, size: 30, color: "#FFBD2D", handleClick: "handleAudio", tooltip: "Microfone"},
    {state: "isShareScreenOn", icon: CgScreen, iconOff: FaRegWindowClose, size: 35, color: "#FF0049", handleClick: "handleShareScreen", tooltip: "Comparilhar Tela"},
    {state: "isVolumeOn", icon: FiVolume2, iconOff: FiVolumeX, size: 30, color: "#FF90BB", handleClick: "handleVolume", tooltip: "Som"},
    {state: "", icon: IoExitOutline, iconOff: IoExitOutline, size: 35, color: "#8C00FF", handleClick: "handleExit", tooltip: "Sair"}
]