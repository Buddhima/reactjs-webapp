import {useState} from 'react'
import React from 'react';
import UserContext  from './UserContext'

function Home() {

    const {currentPrice, setCurrentPrice} = React.useContext(UserContext)

    
    const todayDateString = () => {
        const today = new Date()
        const month = String(today.getMonth()+1).padStart(2, '0')
        const date = String(today.getDate()).padStart(2,'0')

        return `${today.getFullYear()}-${month}-${date}`
    } 


    const [inputs, setInputs] = useState({date: todayDateString()})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))


        if(name == "cost") {
            const calculatedLiters = (value / currentPrice).toFixed(2)
            setInputs(values =>({...values, ["liters"] : calculatedLiters}))
        }

        if(name == "liters") {
            const calculatedCost = (value * currentPrice).toFixed(2)
            setInputs(values =>({...values, ["cost"] : calculatedCost}))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

        let res = fetch("http://localhost:4000/entry", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {"Content-Type": "application/json"}
        }).then(res => {

            let result = res && res.status == "201" ? 'success' : 'failed'
            console.log(`The submission is ${result}`)
        })
        
    }

    return (
<>
<h2>This is Home Page</h2>
<p>Calculate and store fuel pumping entries</p>
<h3>Today fuel price LKR {currentPrice}</h3>

<form onSubmit={handleSubmit}>
    <label>ODO Meter Reading
        <input name="odometer" type="number" value={inputs.odometer || ""} onChange={handleChange} min="0" />
    </label>
    <br/>
    <label>Date
        <input name="date" type="date" value={inputs.date} onChange={handleChange}/>
    </label>
    <br/>
    <label>Cost
        <input name="cost" type="number" value={inputs.cost || ""} onChange={handleChange} min="0" step="0.01" />
    </label>
    <br/>
    <label>Liters
        <input name="liters" type="number" value={inputs.liters || ""} onChange={handleChange} min="0" step="0.01" />
    </label>
    <br/>

    <input type="submit" />
</form>


</>
    );
}

export default Home