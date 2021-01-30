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
    
    useEffect(() => {
        setLocationsData(dataLocations);
    }, []);
    console.log("cF", currentFilter);
    console.log("cL", currentLocation);
{/* <JobList search={search} location={location} zipCode={zipCode} jobType={jobType} jobs={response}/> */}

    console.log(response)

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
            && job.type.toLowerCase().includes(jobType.toLowerCase())).slice(0, 5).map(job => (
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
            </Location.List>
        </Location.Jobs>
        </>
        }
        </>
    )
}
