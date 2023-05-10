import React from 'react';
import { useEffect, useState } from 'react';

const Seat = ({id, ...props}) => {
    const[color, setColor] = useState(props.color);

    useEffect(()=>{
        if(props.color == "rgb(126, 0, 0)"){
            setColor(props.color);
            return;
        }
        props.reserve();
    }, [color])

    return (
        <div style={{backgroundColor: color}} onClick={()=>{setColor(color=="yellow"?props.color:"yellow")}}>{id}</div>
    );
};

export default Seat;