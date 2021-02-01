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
    justify-content: space-between;

    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 4px 5px 4px 17px;
    border-radius: 4px;
    max-width: 80%;
    min-width: 80%;
    margin: auto;
`;

export const Input = styled.input`
    outline: none;
    margin-left: 10px;
    margin-right: 24px;
    padding: 0 4px;
    width: 100%;
    height: 32px;
    border: none;
    background: transparent;
    &::placeholder {
        padding-inline-start: 30px;
    }
    &:placeholder-shown {
    background: url('/img/search.svg') no-repeat;
    align-items: center;
    background-position-y: 2px;
    opacity: .6;
    }
`;

export const Button = styled.button`
    font-family: Roboto;
    font-size: 18px;
    /* identical to box height */
    color: #FFFFFF;

    border: none;
    outline: none;
    cursor: pointer;
    background: #1E86FF;
    padding: 14px 27px;
    border-radius: 4px;
    
`;