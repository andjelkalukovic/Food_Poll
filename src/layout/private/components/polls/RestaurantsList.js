/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Restaurant } from './Restaurant'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getAllRestaurants, createPoll } from '../../../../services/ApiServices';
import { Link } from '@material-ui/core';

export const RestaurantsList = () => {
    const [restaurant, setRestaurant] = useState([])
    const [search, setSearch] = useState([])
    const [input, setInput] = useState([])
    const [selected, setSelected] = useState([])

    const history = useHistory();

    let newPoll = {
        nekaanketa_active: true,
        restaurants: search.map(e=>e.id),
        votes: []
    }

    const poll = () =>{
        createPoll(newPoll)
        console.log(newPoll)
    }

    useEffect(() => {
        getAllRestaurants().then(res => {
            setRestaurant(res.data.data)
            console.log(res.data.data)
        })
    }, [])

    //Poll name
    const handlePollName = (e) => {
        // e.preventDefault();
        console.log('pollname')
    }

    //Autocomplete
    const handleInput = () => {
        let tmp = [...restaurant]
        tmp.splice(tmp.findIndex((el) => el.id === selected.id),1)
        setRestaurant(tmp)
        setSearch([...search, input])
    }

    //Create poll button
    const handleClick = (e) => {
        history.push('/votes')
    }

    return (
        <div>
            <input type='text' placeholder='Poll name'></input>
            <button onClick={e=>handlePollName()}>Add Name</button><br/><br/>

            <Autocomplete
                id="combo-box-demo"
                options={restaurant}
                getOptionLabel={(option) => option.name}
                onChange={(e, value) => {
                    setInput(value); 
                    setSelected(value)}}
                getOptionSelected = {(option, values) => option._id === values._id}
                style={{ width: 300}}
                renderInput={(params) => <TextField onChange={({ target }) => setInput(target.value)} {...params} label="Select restaurants" variant="outlined" />}
            />

                <button onClick={e => handleInput(e)}>Add to list</button>
                <p>Restaurants for today's poll:</p>
                {search.map(el =><Restaurant restaurant={el.name} key={el.id}>}>
                </Restaurant>) }
                {search.length > 1 ? 
                <Link><button onClick={e => {
                    handleClick(e)
                    poll() }}>Create poll</button>
                </Link> : null}
            </div>
    )
}