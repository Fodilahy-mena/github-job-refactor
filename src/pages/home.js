import React from 'react'
import HeaderContainer from '../containers/header';
import LocationContainer from '../containers/location';

export default function Home() {
    return (
        <>  
            <HeaderContainer/>
            <main>
                <LocationContainer/>
            </main>
        </>
    )
}