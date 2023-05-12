import React from 'react';
import { useEffect, setState } from 'react';
import "../styles/Seances.css";

const SeancesList = ({...props}) => {
    const getTime = (str) => {
        str = str.split("T")[1].split(":");
        return str[0] + ":" + str[1];
    }

    const getDate = (str) => {
        return str.split("T")[0];
    }

    useEffect(() => {
        //console.log(props.seances);
        //props.seances.forEach(element => console.log(parseDate(element.TIME_FROM)));

    }, [])

    return (
        <div id = "seances">
            <h2>Movie: <b>{props.movieTitle}</b></h2>
            {props.seances.map((seance, i) => (
                <a href = {`/seance/${seance.SEANCE_ID}`}>
                    <b>{getDate(seance.TIME_FROM)}</b> {getTime(seance.TIME_FROM)} - {getTime(seance.TIME_TO)}, room number: {seance.ROOM_ID}
                </a>
            ))}
        </div>
    );
};

export default SeancesList;