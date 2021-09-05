import { BsMic, BsMicMute } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { FiVideo, FiVideoOff, FiVolume2, FiVolumeX } from "react-icons/fi"
import { IoExitOutline } from "react-icons/io5"
import { FaRegWindowClose } from "react-icons/fa"

export const participants = [
    {id: 1, name: "Rita", image: "video8.mp4", isVideoOn: true},
    {id: 2, name: "Mauro", image: "video3.mp4", isVideoOn: true},
    {id: 3, name: "Paula", image: "video4.mp4", isVideoOn: true},
    {id: 4, name: "Fernanda", image: "video5.mp4", isVideoOn: true},
    {id: 5, name: "Márcia", image: "video6.mp4", isVideoOn: true},
    {id: 6, name: "Raquel", image: "video.mp4", isVideoOn: true},
    {id: 7, name: "Marina", image: "video2.mp4", isVideoOn: true},
    {id: 8, name: "Pedro", image: "video9.mp4", isVideoOn: true},
    {id: 9, name: "Fábio", image: "video10.mp4", isVideoOn: true},
    {id: 10, name: "Nicolas", image: "video11.mp4", isVideoOn: true},
    {id: 11, name: "Luana", image: "video12.mp4", isVideoOn: true},
    {id: 12, name: "Vivian", image: "video13.mp4", isVideoOn: true},
]

export let chatMessages = [
    {content: "Oi", participantName: "Rita"},
    {content: "Tudo bem?", participantName: "Rita"},
    {content: "Sobre o projeto...", participantName: "Rita"},
    {content: "Ficou ótimo", participantName: "Rita"},
]

export let menuIconsList = [
    {state: "isVideoOn", icon: FiVideo, iconOff: FiVideoOff, size: 35, color: "#6200FF", handleClick: "handleCamera", tooltip: "Câmera"},
    {state: "isMicrophoneOn", icon: BsMic, iconOff: BsMicMute, size: 30, color: "#FFBD2D", handleClick: "handleAudio", tooltip: "Microfone"},
    {state: "isShareScreenOn", icon: CgScreen, iconOff: FaRegWindowClose, size: 35, color: "#FF0049", handleClick: "handleShareScreen", tooltip: "Comparilhar Tela"},
    {state: "isVolumeOn", icon: FiVolume2, iconOff: FiVolumeX, size: 30, color: "#FF90BB", handleClick: "handleVolume", tooltip: "Som"},
    {state: "", icon: IoExitOutline, iconOff: IoExitOutline, size: 35, color: "#8C00FF", handleClick: "handleExit", tooltip: "Sair"}
]