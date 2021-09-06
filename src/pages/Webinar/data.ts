import { BsMic, BsMicMute } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { FiVideo, FiVideoOff, FiVolume2, FiVolumeX } from "react-icons/fi"
import { IoExitOutline } from "react-icons/io5"
import { FaRegWindowClose } from "react-icons/fa"
import Participant from "../../models/Participant"
import MenuIcon from "../../models/MenuIcon"

export const participants = [
    new Participant(1, "Rita", "video8.mp4", true),
    new Participant(2, "Mauro", "video3.mp4", true),
    new Participant(3, "Paula", "video4.mp4", true),
    new Participant(4, "Fernanda", "video5.mp4", true),
    new Participant(5, "Márcia", "video6.mp4", true),
    new Participant(6, "Raquel", "video.mp4", true),
    new Participant(7, "Marina", "video2.mp4", true),
    new Participant(8, "Pedro", "video9.mp4", true),
    new Participant(9, "Fábio", "video10.mp4", true),
    new Participant(10, "Nicolas", "video11.mp4", true),
    new Participant(11, "Luana", "video12.mp4", true),
    new Participant(12, "Vivian", "video13.mp4", true),
]

export let menuIconsList = [
    new MenuIcon("isVideoOn", FiVideo, FiVideoOff, 35, "#6200FF", "handleCamera", "Câmera"),
    new MenuIcon("isMicrophoneOn", BsMic, BsMicMute, 30, "#FFBD2D", "handleAudio", "Microfone"),
    new MenuIcon("isShareScreenOn", CgScreen, FaRegWindowClose, 35, "#FF0049", "handleShareScreen", "Comparilhar Tela"),
    new MenuIcon("isVolumeOn", FiVolume2, FiVolumeX, 30, "#FF90BB", "handleVolume", "Som"),
    new MenuIcon("", IoExitOutline, IoExitOutline, 35, "#8C00FF", "handleExit", "Sair"),
]