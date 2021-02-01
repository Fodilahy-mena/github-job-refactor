import React, {useReducer, useEffect, useContext} from 'react';

const Context = React.createContext();

const API_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description";

function ContextProvider(props) {

    let [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
          case 'LOADING': {
            return { ...state, loading: true }
          }
          case 'RESOLVED': {
            return {
              ...state,
              loading: false,
              response: action.response,
              error: null
            }
          }
          case 'ERROR': {
            return {
              ...state,
              loading: false,
              response: null,
              error: action.error
            }
          }
          case 'SWITCHT_FILTER': {
            return { ...state, currentFilter: action.switchFilter}
          }
          case 'SWITCHT_LOCATION': {
            return { ...state, currentLocation: action.switchLocation}
          }
          
          default:
            return state
        }
      }, {
        loading: false,
        response: null,
        error: null,
        currentFilter: '',
        // a default job loction, will be updated
        currentLocation: '',
        
      })

    // fetch the API_URL github jobs api
    useEffect(() => {
        let isCurrent = true
        dispatch({ type: "LOADING" })
        fetch(API_URL)
        .then(response => response.json())
        .then(json => {
            if (isCurrent) {
            // update the null response in the context into json data
            dispatch({ type: "RESOLVED", response: json })
            }
            // catch if there is an error
        }).catch(error => {
            dispatch({ type: "ERROR", error })
        })
        return () => {
        isCurrent = false
        }
  }, [])
  // console.log('haha', state.response)
    return <Context.Provider value={{state, dispatch}}>
                {props.children}
            </Context.Provider>
            
}

export { ContextProvider, Context};