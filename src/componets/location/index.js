
import React from 'react'
import {Container, Form,
        JobType, JobTypeInput, JobTypeLabel, 
        Frame, FrameInput, FrameLabel, 
        Fieldset, FieldsetInput, FieldsetLabel, Button,
        Jobs, List, Link, Item, Image, Wrapper, JobLoc, JobTitle,
        JobTypeName, JobLocName, JobCreatedOn,
        Pagination, PageButton, Arrow
        } from './styles/location';

export default function Location({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>);
}

Location.Form = function LocationForm({children, ...restProps}) {
    return (<Form {...restProps}>{children}</Form>)
}

Location.JobType = function LocationJobType({children, ...restProps}) {
    return (<JobType {...restProps}>{children}</JobType>)
}


Location.JobTypeInput = function LocationJobTypeInput({...restProps}) {
    return (<JobTypeInput {...restProps}/>)
}


Location.JobTypeLabel = function LocationJobTypeLabel({children, ...restProps}) {
    return (<JobTypeLabel {...restProps}>{children}</JobTypeLabel>)
}

Location.Frame = function LocationFrame({children, ...restProps}) {
    return (<Frame {...restProps}>{children}</Frame>)
}

Location.FrameInput = function LocationFrameInput({children, ...restProps}) {
    return (<FrameInput {...restProps}/>)
}

Location.FrameLabel = function LocationFrameLabel({children, ...restProps}) {
    return (<FrameLabel {...restProps}>{children}</FrameLabel>)
}

Location.Fieldset = function LocationFieldset({children, ...restProps}) {
    return (<Fieldset {...restProps}>{children}</Fieldset>)
}

Location.FieldsetInput = function LocationFieldsetInput({children, ...restProps}) {
    return (<FieldsetInput {...restProps}>{children}</FieldsetInput>)
}

Location.FieldsetLabel = function LocationFieldsetLabel({children, ...restProps}) {
    return (<FieldsetLabel {...restProps}>{children}</FieldsetLabel>)
}

Location.Button = function LocationButton({children, ...restProps}) {
    return (<Button {...restProps}>{children}</Button>)
}

Location.Jobs = function LocationJobs({children, ...restProps}) {
    return (<Jobs {...restProps}>{children}</Jobs>)
}

Location.List = function LocationList({children, ...restProps}) {
    return (<List {...restProps}>{children}</List>)
}

Location.Link = function LocationLink({children, ...restProps}) {
    return (<Link {...restProps}>{children}</Link>)
}

Location.Item = function LocationItem({children, ...restProps}) {
    return (<Item {...restProps}>{children}</Item>)
}

Location.Image = function LocationImage({children, ...restProps}) {
    return (<Image {...restProps}/>)
}

Location.Wrapper = function LocationWrapper({children, ...restProps}) {
    return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Location.JobLoc = function LocationJobLoc({children, ...restProps}) {
    return (<JobLoc {...restProps}>{children}</JobLoc>)
}

Location.JobTitle = function LocationJobTitle({children, ...restProps}) {
    return (<JobTitle {...restProps}>{children}</JobTitle>)
}

Location.JobTypeName = function LocationJobTypeName({children, ...restProps}) {
    return (<JobTypeName {...restProps}>{children}</JobTypeName>)
}

Location.JobLocName = function LocationJobLocName({children, ...restProps}) {
    return (<JobLocName {...restProps}>{children}</JobLocName>)
}

Location.JobCreatedOn = function LocationJobCreatedOn({children, ...restProps}) {
    return (<JobCreatedOn {...restProps}>{children}</JobCreatedOn>)
}


Location.Pagination = function LocationPagination({children, ...restProps}) {
    return (<Pagination {...restProps}>{children}</Pagination>)
}

Location.PageButton = function LocationPageButton({children, ...restProps}) {
    return (<PageButton {...restProps}>{children}</PageButton>)
}

Location.Arrow = function LocationArrow({children, ...restProps}) {
    return (<Arrow {...restProps}>{children}</Arrow>)
}
