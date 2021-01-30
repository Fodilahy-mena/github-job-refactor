import styled from 'styled-components';

export const HeaderElement = styled.header`

`;

export const Container = styled.section`

`;
export const Frame = styled.div`
    background-image: url('/img/backgroundImg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10%;
    padding-bottom: 10%;
`;

export const Form = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 4px;
    max-width: 80%;
    min-width: 80%;
    margin: auto;
`;

export const Input = styled.input`
    padding: 12px 48px;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #FFFFFF;

    padding: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #1E86FF;
    border-radius: 4px;
`;