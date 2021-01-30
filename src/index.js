import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyles from './global-styles';
import App from './app';
import {ContextProvider} from './context/useContext';

ReactDom.render(
    <ContextProvider>
         <Router>
            <GlobalStyles/>
            <App/>
         </Router>
    </ContextProvider>
, document.getElementById('root'));