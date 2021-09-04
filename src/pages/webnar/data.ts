import { BsChat, BsMic } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { IoExitOutline, IoVideocamOutline } from "react-icons/io5"

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
    {icon: IoVideocamOutline, size: 35, color: "#6200FF"},
    {icon: BsMic, size: 30, color: "#FFBD2D"},
    {icon: CgScreen, size: 35, color: "#FF0049"},
    {icon: BsChat, size: 30, color: "#FF90BB"},
    {icon: IoExitOutline, size: 35, color: "#8C00FF"}
]