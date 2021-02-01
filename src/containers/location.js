import React,{useContext, useEffect, useState} from 'react'
import {Context} from '../context/useContext';
import dataLocations from '../dataLocations.json';

import { Location } from '../componets';

export default function LocationContainer({children}) {
    const {state, dispatch} = useContext(Context);
    const {loading, response, currentFilter, currentLocation} = state;
    
    const [zipCode, setZipCode] = useState("");
    const [locationsData, setLocationsData] = useState([]);

    const [location, setLocation] = useState("")
    const [isJobType, setIsJobType] = useState(false);
    const [jobType, setJobType] = useState('');
    const [fromPage, setFromPage] = useState(0);
    const [toPage, setToPage] = useState(5)
    
    useEffect(() => {
        setLocationsData(dataLocations);
    }, []);
    
    const filter = response !== null && 
            // filter the data by their title, location, company name, and job type
            response.filter(job =>
            job.location.toLowerCase().includes(currentLocation.toLowerCase())
            && job.title.toLowerCase().includes(currentFilter.toLowerCase())
            && job.company.toLowerCase().includes(currentFilter.toLowerCase())
            && job.type.toLowerCase().includes(jobType.toLowerCase()))
    
    console.log(response)
    console.log(filter)

    return (
        <>
        { loading && <div>Loading...</div> }
        {!loading &&
        <>
        <Location>
            <Location.Form>
                <Location.JobType>
                    <Location.JobTypeInput 
                    type="checkbox" 
                    name="jobType"
                    onChange={() => {
                        setIsJobType(prevType => !prevType)
                        if(isJobType === false) {
                            setJobType("Full time")
                        } else {
                            setJobType("")
                        }
                        }
                        }
                        checked={jobType === "Full time"}/>
                    <Location.JobTypeLabel>
                        Full time
                    </Location.JobTypeLabel>
                </Location.JobType>

                <Location.Frame>
                    <Location.FrameLabel>
                        Location
                    </Location.FrameLabel>
                    <Location.FrameInput onChange={(e) => 
                    setZipCode(e.target.value)}
                    placeholder="City, state, zip code or country"/>
                    {locationsData.map((locationData) => 
                    <Location.Fieldset key={locationData.id}>
                        <Location.JobTypeInput
                        checked={locationData.name == currentLocation}
                        onChange={(e) => {
                        setLocation(e.target.value)
                        dispatch({ type: 'SWITCHT_LOCATION', switchLocation: e.target.value })
                        }} value={locationData.name}
                        type="checkbox"/>
                        <Location.JobTypeLabel>
                            {locationData.name}
                        </Location.JobTypeLabel>
                    </Location.Fieldset>
                    )}
                </Location.Frame>
            </Location.Form>
        </Location>
        <Location.Jobs>
            <Location.List>
            {/* Don't map unless the api is loaded */}
            {response !== null && 
            // filter the data by their title, location, company name, and job type
            response.filter(job =>
            job.location.toLowerCase().includes(currentLocation.toLowerCase())
            && job.title.toLowerCase().includes(currentFilter.toLowerCase())
            && job.company.toLowerCase().includes(currentFilter.toLowerCase())
            && job.type.toLowerCase().includes(jobType.toLowerCase())).slice(fromPage, toPage).map(job => (
                <Location.Link to={`/${job.id}`} key={job.id}>
                    <Location.Item>
                        <Location.Image src={job.company_logo}/>
                        <Location.Wrapper>
                            <Location.JobLoc>{job.location}</Location.JobLoc>
                            <Location.JobTitle>{job.title}</Location.JobTitle>
                            <Location.JobTypeName>{job.type}</Location.JobTypeName>
                        </Location.Wrapper>
                        <Location.Wrapper>
                            <Location.JobLocName>{job.location}</Location.JobLocName>
                            <Location.JobCreatedOn>{new Date(job.created_at).toDateString()}</Location.JobCreatedOn>
                        </Location.Wrapper>
                    </Location.Item>
                </Location.Link>
                ))}
                <Location.Pagination>
                    {toPage > 5 && <Location.Arrow onClick={() => {
                    setFromPage(fromPage - 5);
                    setToPage(toPage - 5)
                    }} className="ri-arrow-left-s-line"></Location.Arrow>}
                    <Location.PageButton id={toPage === 5 ? 'active' : ''} onClick={() => {
                        setFromPage(0);
                        setToPage(5)
                    }}>
                        1
                    </Location.PageButton>
                    {filter.length > 5 && <Location.PageButton id={toPage === 10 ? 'active' : ''} onClick={() => {
                        setFromPage(5);
                        setToPage(10)
                    }}>
                        2
                    </Location.PageButton>}
                    {filter.length > 10 && <Location.PageButton id={toPage === 15 ? 'active' : ''} onClick={() => {
                        setFromPage(10);
                        setToPage(15)
                    }}>
                        3
                    </Location.PageButton>}
                    {filter.length > 15 && <Location.PageButton id={toPage === 20 ? 'active' : ''} onClick={() => {
                        setFromPage(15);
                        setToPage(20)
                    }}>
                        4
                    </Location.PageButton>}

                    {filter.length > 20 && <Location.PageButton id={toPage === 25 ? 'active' : ''} onClick={() => {
                        setFromPage(20);
                        setToPage(25)
                    }}>
                        5
                    </Location.PageButton>}
                    
                    {toPage <= filter.length && <Location.Arrow id={toPage > 25 ? 'active' : ''} onClick={() => {
                        setFromPage(fromPage + 5);
                        setToPage(toPage + 5)
                    }} className="ri-arrow-right-s-line"></Location.Arrow>}
                </Location.Pagination>
            </Location.List>
        </Location.Jobs>
        </>
        }
        </>
    )
}
