import React from 'react';


function SummaryItem({ itemName, itemValue }) {
    console.log(itemName, itemValue)
    
    return <div className='circle'>
        <p className='item-value'>{itemValue}</p>
        <p className='item-name'> {itemName}</p>
    
</div>
    

}
export default SummaryItem