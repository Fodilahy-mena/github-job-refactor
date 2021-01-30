import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Details } from './pages';
export default function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/:jobId">
                    <Details/>
                </Route>
            </Switch>
        </>
    )
}
