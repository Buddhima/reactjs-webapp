

function HistoryRecord(props) {


    return (
<>

    Pumped Fuel on {props.details.date}, 
    quantity {props.details.liters}, 
    ODOmeter record was {props.details.odometer} and 
    payed LKR {props.details.cost}

</>
    );
}

export default HistoryRecord