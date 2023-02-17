import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../containers/App';

function IndexPage() {
    const { state } = useContext(StateContext);
    const navigate = useNavigate();

    // if (state.authenticated) {
    //     navigate('/home')
    // } else {
    //     navigate('/login')
    // }

    useState(() => {
        if (state.authenticated) {
            console.log(1);
            navigate('/home')
        } else {
            console.log(2);
            navigate('/login')
        }
    }, [state.authenticated])

    return (<></>)
}

export default IndexPage