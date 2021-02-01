import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`

`;

export const Form = styled.form`

`;

export const JobType = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 32px;
    margin-bottom: 32px;
`;


export const JobTypeInput = styled.input`

`;

export const JobTypeLabel = styled.label`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    color: #334680;
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
`;


export const FrameInput = styled.input`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 17px 14px;
    border: none;
    outline: none;
`;

export const FrameLabel = styled.label`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-transform: uppercase;
    color: #B9BDCF;
    margin-bottom: 12px;
`;

export const Fieldset = styled.fieldset`
    margin: 0;
    width: auto;
    padding: 0;
    border: navajowhite;
    margin-bottom: 12px;
    &:nth-of-type(1) {
        margin-top: 12px;
    }
`;

export const FieldsetInput = styled.input`

`;

export const FieldsetLabel = styled.label`

`;


export const Button = styled.button`

`;

// second section


export const Jobs = styled.section`

`;

export const List = styled.ul`
    list-style: none;
    padding:0;
`;

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 14px;
    margin-bottom: 16px;
`;

export const Image = styled.img`
    max-width: 90px;
    height: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`

`;

export const JobLoc = styled.h3`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    color: #334680;
`;

export const JobTitle = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #334680;
`;

export const JobTypeName = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    color: #334680;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    padding: 6px 8px;
`;

export const JobLocName = styled.span`

`;

export const JobCreatedOn = styled.span`

`;

export const Pagination = styled.div`

`;
export const PageButton = styled.button`
    padding: 11px 15px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #b9bdcf;
    border: 1px solid #b9bdcf;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    &:hover {
        border-color: #1e86ff;
    }
`;

export const Arrow = styled.i`
    padding: 14px 15px;
    position: relative;
    top: 2px;
    border: 1px solid #b9bdcf;
    border-radius: 4px;
    color: #b9bdcf;
    outline: none;
    &:hover {
        border-color: #1e86ff;
    }
`;