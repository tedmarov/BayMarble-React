import React, { useState } from "react";

export const TakeNum = () => {
    const [num, setNum] = useState(0)
    const takeNumber = () => {
        setNum(num + 1)
        console.log(num)
    }

    return (
        <>
            <h2>Please take a ticket</h2>
            <button onClick={takeNumber}>Take Ticket</button>
            <h2>Current Number: {num}</h2>
        </>
    )
}