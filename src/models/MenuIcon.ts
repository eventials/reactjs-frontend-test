import { IconType } from "react-icons/lib"

export default class MenuIcon {
    state
    icon
    iconOff
    size
    color
    handleClick
    tooltip
    constructor(state: string, icon: IconType, iconOff: IconType, size: number, color: string, handleClick: string, tooltip: string) {
        this.state = state
        this.icon = icon
        this.iconOff = iconOff
        this.size = size
        this.color = color
        this.handleClick = handleClick
        this.tooltip = tooltip
    }
}