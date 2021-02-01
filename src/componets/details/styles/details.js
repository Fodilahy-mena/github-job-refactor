import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    @media (min-width: 1114px) {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 32px;
    }
`;

export const Header = styled.header`

`;
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
`;

export const ApplyTitle = styled.h2`

`;

export const HowToApply = styled.p`

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

export const CreatedAt = styled.span`
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    /* padding-bottom: 2rem; */
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

`;
