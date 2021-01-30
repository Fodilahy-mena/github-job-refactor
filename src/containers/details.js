import React, {useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Details} from '../componets';
import {Context} from '../context/useContext';

export default function DetailsContainer({children}) {
    const {state, dispatch} = useContext(Context);
    const {response} = state;
    const {jobId} = useParams();
    const [search, setSearch] = useState("");
    
    const thisJob = response !== null && response.filter(job => job.id == jobId);
    // convert the response into an array so that we can map it
    let newArr = Array.from(thisJob);
    

    return (
        newArr.map(arr => (
        <Details key={arr.id} id={arr.id}>
            <Details.Header>
                <Details.Link to={`/`}><i className="ri-arrow-left-line"></i> Go back to Search</Details.Link>
                <Details.ApplyTitle>How to apply</Details.ApplyTitle>
                <Details.HowToApply dangerouslySetInnerHTML={{__html: arr.how_to_apply}}></Details.HowToApply>
                <Details.JobUrl src={arr.url}>wes@{arr.title}><i>&CC</i> {arr.company}</Details.JobUrl>
            </Details.Header>
            <Details.Article>
                <Details.Job>
                    <Details.JobTitle>{arr.title}</Details.JobTitle>
                    <Details.JobType>{arr.type}</Details.JobType>
                </Details.Job>
                <Details.CreatedAt>{new Date(arr.created_at).toDateString()}</Details.CreatedAt>
                <Details.Company>
                    <Details.Logo src={arr.company_logo}/>
                    <Details.Wrapper>
                        <Details.Location>{arr.location}</Details.Location>
                        <Details.JobBirth>{new Date(arr.created_at).toDateString()}</Details.JobBirth>
                    </Details.Wrapper>
                </Details.Company>
                <Details.Description dangerouslySetInnerHTML={{__html: arr.description}}></Details.Description>
            </Details.Article>
        </Details>
        ))
    )
}
