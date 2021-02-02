import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    
    color: #334680;
    @media (min-width: 1114px) {
        display: grid;
        grid-template-columns: 25% 1fr;
        gap: 32px;
    }
    a {
        text-decoration: none;
        color: #1E86FF;
    }
`;

export const Header = styled.header`

`;
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: #1E86FF;
`;

export const ApplyTitle = styled.h2`
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-transform: uppercase;
    color: #B9BDCF;
`;

export const HowToApply = styled.p`
    word-break: break-all;
`;

export const JobUrl = styled.a`

`;

export const Article = styled.article`

`;

export const Job = styled.div`
    display: flex;
    gap: 10px;
`;

export const JobTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #334680;
`;

export const JobType = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    color: #334680;
    position: relative;
    top: 26px;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    padding: 6px 8px;
    max-width: fit-content;
    height: fit-content;
`;

export const CreatedAt = styled.p`
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    margin-top: 0;
    margin-bottom: 35px;
    /* identical to box height */
    color: #B7BCCE;

`;

export const Company = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    max-width: 90px;
    height: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    margin-right: 1rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CompanyName = styled.strong`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #334680;
`;

export const Location = styled.span`
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    /* identical to box height */
    color: #B9BDCF;
`;


export const Description = styled.div`
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */
    color: #334680;

`;
