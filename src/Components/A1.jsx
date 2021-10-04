import React, { useState, useEffect } from 'react'

export default function A1(props) {
    const [a, seta] = useState([props.data]);

    return (
        <div>
            {
                a.map((val, i) => (
                    <h1 key={i} style={{ border: "2px solid red" }}>{val.title}</h1>
                ))
            }
        </div>
    )
}
