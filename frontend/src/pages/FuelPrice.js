import {useState} from 'react'
import React from 'react';
import { useContext } from "react";
import UserContext  from './UserContext'

function FuelPrice() {

    const {currentPrice, setCurrentPrice} = React.useContext(UserContext)

    const [fuelprice, setFuelPrice] = useState("")

    const handleChange = (event) => {
        setFuelPrice(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('LKR ' + fuelprice)
        setCurrentPrice(fuelprice)
    }

    return (
<>
<h2>This is FuelPrice Page</h2>
<h3>Existing fuel price LKR {currentPrice} per liter</h3>

<form onSubmit={handleSubmit}>
    <label>
        Fuel price LKR / liter
        <input name="fuelPrice" type="number" onChange={handleChange} value={fuelprice} step="0.01" min="0" />
    </label>
    <input type="submit" value="Update"/>
</form>

</>
    );
}

export default FuelPrice