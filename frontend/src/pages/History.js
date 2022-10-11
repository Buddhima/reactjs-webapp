import { useEffect, useState } from "react";
import HistoryRecord     from "./HistoryRecord";

function History() {

    const [records, setRecords] = useState()
    const [retrievedRecords, setRetrievedRecords] = useState()
    const [filterDate, setFilterDate] = useState()

    useEffect(() => {
        fetch("http://localhost:4000/entry")
        .then(res => res.json())
        .then(data => {
            setRecords(data)
            setRetrievedRecords(data)
        })
    }, [])

    const filterByDate = () => {
        let existingRecords = retrievedRecords
        let totalCost = 0

        let filteredRecords = existingRecords.filter( (record) => {
            let v1 = new Date(filterDate)
            let v2 = new Date(record.date)

            return v1.getTime() === v2.getTime()
        })

        setRecords(filteredRecords)

        filteredRecords.forEach(element => {
            totalCost += Number(element.cost)
        });

        console.log(`Total cost was LKR ${totalCost}`)
    }

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setFilterDate(value)
    }

    return (
<>
<h2>This is History Page</h2>
<ul>
    {records && records.map((record) => 
        
            <div key={record.id}>
                <p> 
                    <HistoryRecord key={record.id} details={record} />
                    <input type="button" value="Delete" />
                    
                </p>
                <hr />
            </div>
        
     )}
</ul>
<label>Date
    <input name="filter-date" type="date" onChange={handleChange}/>
</label>
<input type="button" onClick={filterByDate} value="Filter Date" />

</>
    );
}

export default History