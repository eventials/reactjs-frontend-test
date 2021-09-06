import React from 'react'
import { IconType } from 'react-icons';
import { MenuItemContainer, Container } from './styles';

interface IMenuIconsList {
    state: string;
    icon: IconType;
    iconOff: IconType;
    size: number;
    color: string;
    handleClick: string;
    tooltip: string;
}

interface IMenuContainer {
    menuIconsList: IMenuIconsList[];
    checkState: (state: string) => boolean | undefined;
    handleClickMenuIcon: (handleFunction: string) => void;
}

const MenuContainer: React.FC<IMenuContainer> = ({
    menuIconsList, checkState, handleClickMenuIcon
}) => {
    return (
        <Container>
            { menuIconsList.map((menuIcon) => {
                if(checkState(menuIcon.state)) {
                    return (
                        <MenuItemContainer>
                            <menuIcon.icon
                                className="menuIcon"
                                size={menuIcon.size}
                                color={menuIcon.color}
                                onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                title={menuIcon.tooltip}
                            />
                        </MenuItemContainer>
                    )
                } else {
                    return (
                        <MenuItemContainer>
                            <menuIcon.iconOff
                                className="menuIcon"
                                size={menuIcon.size}
                                color={menuIcon.color}
                                onClick={() => handleClickMenuIcon(menuIcon.handleClick)}
                                title={menuIcon.tooltip}
                            />
                        </MenuItemContainer>
                    )
                }
            })}
        </Container> 
    );
}

export default MenuContainer;
