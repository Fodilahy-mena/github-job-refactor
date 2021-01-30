import React from 'react'
import {Header, Container, Link, ApplyTitle, HowToApply, JobUrl, Article, Job, JobTitle, JobType, CreatedAt, Company, Logo, Wrapper, Location, JobBirth, Description } from './styles/details';

export default function Details({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>);
}

Details.Header = function DetailsHeader({children, ...restProps}) {
    return (<Header {...restProps}>{children}</Header>)
}

Details.Link = function DetailsLink({children, ...restProps}) {
    return (<Link {...restProps}>{children}</Link>)
}

Details.ApplyTitle = function DetailsApplyTitle({children, ...restProps}) {
    return (<ApplyTitle {...restProps}>{children}</ApplyTitle>)
}

Details.HowToApply = function DetailsHowToApply({children, ...restProps}) {
    return (<HowToApply {...restProps}>{children}</HowToApply>)
}

Details.JobUrl = function DetailsJobUrl({children, ...restProps}) {
    return (<JobUrl {...restProps}>{children}</JobUrl>)
}

Details.Article = function DetailsArticle({children, ...restProps}) {
    return (<Article {...restProps}>{children}</Article>)
}

Details.Job = function DetailsJob({children, ...restProps}) {
    return (<Job {...restProps}>{children}</Job>)
}

Details.JobTitle = function DetailsJobTitle({children, ...restProps}) {
    return (<JobTitle {...restProps}>{children}</JobTitle>)
}

Details.JobType = function DetailsJobType({children, ...restProps}) {
    return (<JobType {...restProps}>{children}</JobType>)
}

Details.CreatedAt = function DetailsCreatedAt({children, ...restProps}) {
    return (<CreatedAt {...restProps}>{children}</CreatedAt>)
}

Details.Company = function DetailsJobCompany({children, ...restProps}) {
    return (<Company {...restProps}>{children}</Company>)
}

Details.Logo = function DetailsLogo({children, ...restProps}) {
    return (<Logo {...restProps}/>)
}

Details.Wrapper = function DetailsWrapper({children, ...restProps}) {
    return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Details.Location = function DetailsLocation({children, ...restProps}) {
    return (<Location {...restProps}>{children}</Location>)
}

Details.JobBirth = function DetailsJobBirth({children, ...restProps}) {
    return (<JobBirth {...restProps}>{children}</JobBirth>)
}

Details.Description = function DetailsDescription({children, ...restProps}) {
    return (<Description {...restProps}>{children}</Description>)
}