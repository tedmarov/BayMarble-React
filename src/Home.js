import React from "react";

export const Home = (props) => {

    const num = 0
    const bakers = ["Anita", "Ginger", "Dusty", "Josephine"]

    return (
        <>
            <h1>Welcome to Bay and Marble Doughnut Shoppe, {props.user.name}</h1>
            <p>We have lovely doughnuts made by an awesome team
            of bakers!</p>
            <h2>Our Bakers:</h2>
            <ul>
                {bakers.map((baker, i) => <li key={i}>{baker}</
                li>)}
            </ul>

            <h2>Please take a ticket</h2>
            <button>Get Ticket</button>
        </>
    )
}