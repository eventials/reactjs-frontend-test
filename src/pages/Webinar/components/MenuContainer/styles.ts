import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    height: 12%;
    background-color: #EFF2F8;
`

export const MenuItemContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 15px;
    margin-left: 15px;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);

    .menuIcon {
        margin: 10px;
        border-right: 80px;
    }
`