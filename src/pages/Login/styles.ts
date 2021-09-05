import styled from 'styled-components';

export const LoginContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #EFF2F8;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    margin-top: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #EFF2F8;
    border-radius: 5px;
    background-color: white;
    width: 410px;
    height: 320px;

    .enterBtn {
        margin-top: 20px;
        width: 350px;
    }
`

export const Text = styled.p`
    font-size: 12px;
    margin-top: 0;
`

export const ErrorMessage = styled.span`
    font-size: 14px;
    color: #FF0049;
`

export const InputLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 100px;
    margin-top: 10px;
`


