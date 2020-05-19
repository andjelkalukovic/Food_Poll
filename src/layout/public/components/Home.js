import React from 'react';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Home = () =>{

    const history = useHistory();

    const letsCreate = (e) => {
        history.push('/poll')
    }

    return (
        <div>
            <h1>
                Welcome!
            </h1>
            <h3>Let's create today's poll!</h3>
            <Link> <button onClick={e=>letsCreate()}>Start</button>
            </Link>
        </div>
    )
}