import React from 'react'

export const Restaurant = ({restaurant}) =>{
    
    // const handleClick = (e)=>{
    //     console.log('click')
    // }

    return (
        <div>
            {restaurant}<br/>
            {/* <button onClick={e=>handleClick()}>Vote</button> */}
        </div>
    )
}