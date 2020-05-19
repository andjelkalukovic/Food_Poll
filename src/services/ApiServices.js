import axios from 'axios'

const BaseUrl = `http://itbootcamp.westeurope.cloudapp.azure.com`

export const getAllRestaurants = async () =>{
    let url = `${BaseUrl}/restaurant`
    let response = await axios.get(url)
    return response
}

export const getAllVotes = async () =>{
    let url = `${BaseUrl}/vote`
    let response = await axios.get(url)
    return response
}

export const voteForRestaurant = async (id) =>{
    let url = `${BaseUrl}/vote/${id}`
    let response = await axios.put(url)
    return response
}

export const createPoll = async (newPoll) =>{
    let url = `${BaseUrl}/poll`
    let response = await axios.post(url, newPoll)
    return response
}