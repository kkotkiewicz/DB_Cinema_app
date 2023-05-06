import React from 'react';
import { Seances } from '../services/Seances';
import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import "../styles/SeanceRoom.css"
import Seat from './Seat';

function SeanceRoom({...props}) {
    const location = useLocation();
    const id = parseInt(location.pathname.split("/")[2]);
    const[seance, setSeance] = useState({
        seanceId: id,
        seats: []
    });

    useEffect(() => {
        Seances.getSeance(id).then((res) => {
            let tmp = res.data.seats;
            tmp.forEach((seat)=>{
                seat["color"] = seat.taken?'rgb(126, 0, 0)':'#8bc34a';
            });

            setSeance((seance)=>({...seance, seats: tmp}));
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div id = "seance-room">
            <div id = "screen">Screen</div>
            <div id = "seats">
                {seance.seats.map((seat, i) => (
                    <Seat id = {seat.id} color = {seat.color}></Seat>
                ))}
            </div>
            <a href = {`/reservation/${0}`}><button>Go to reservation page</button></a>
        </div>
    );
}

export default SeanceRoom;