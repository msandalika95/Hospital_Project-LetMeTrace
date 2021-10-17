import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllPatients() {

    const [patients, setPatients] = useState([]);
    useEffect(() => {
        function getPatients(){
            axios.get("http://localhost:8070/visitor/").then((res) => {
                setPatients(res.data);
                //console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPatients();

    }, [])

    return(
        <div>
            <h1>All patients</h1>
        </div>
    )
}