import React, {useState, useContext} from 'react';
import {Header} from '../componets';
import {Context} from '../context/useContext';

export default function HeaderContainer({children}) {
    const {state, dispatch} = useContext(Context);
    const [search, setSearch] = useState("");

    function handleSearche(e) {
        e.preventDefault();
        console.log("ser",search)
        dispatch({ type: 'SWITCHT_FILTER', switchFilter: search });
        setSearch('');
        e.target.reset();
    }

    return (
        <Header>
            <Header.Container>
                <Header.Frame>
                    <Header.Form onSubmit={(e, id) => handleSearche(e, id)}>
                        <Header.Input onChange={(e) => setSearch(e.target.value)}/>
                        <Header.Button>Search</Header.Button>
                    </Header.Form>
                </Header.Frame>
            </Header.Container>
        </Header>
    )
}
