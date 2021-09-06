import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7%;
    width: 100%;
    background-color: #EFF2F8;
    border-radius: 20px;
`

export const Logo = styled.img`
    width: 50px;
    border-radius: 50px;
    margin-left: 10px;
    box-shadow: 2px 2px 5px rgba(180, 180, 180, 0.8);
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-left: 30px;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bolder;
    font-size: 22px;
`
