import React from "react";
import SummaryItem from "./SummaryItem";
import '../../styles/CompanyDashboard/summary.css'

function Summary() {

    // an array from backend is ideal
    
    const theItems = [
        {itemName: 'Jobs Posted', itemValue: 10 },
        {itemName:'Surveys Posted',itemValue:13},
        {itemName: 'Jobs Applied', itemValue: 7 }, 
        {itemName:'Surveys Done',itemValue:3}

]

    const items = theItems.map(item => {
        return <SummaryItem
            key={item.itemName}
            itemName={item.itemName}
            itemValue={item.itemValue}/>
        

    })
    
    return (
        <div id='summary' className="container">
            <p>Summary of posted requirements</p>
            <div className="summary-items">{items}</div>
            </div>
    )    

    
}
export default Summary