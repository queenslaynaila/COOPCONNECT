import { useState } from "react"

import TableRows from "./TableRows";
function AddDeleteTableRows({seeker}){


    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            level :'',
            startdate:'',
            enddate:'',
            certificatename:'',
            institution:'',
            seeker_id:seeker.id
        }
        setRowsData([...rowsData, rowsInput])

    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }

   const handleChange = (index, evnt)=>{

    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);

}
console.log(rowsData)
function handleUpdate(e){
    rowsData.forEach((row)=>{
        fetch(`/educations`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(row)
          }).then(res => {
            if(res.ok){
                alert("Post was succesfull")
            }
          });
    })

}

    return(
        <div  >
            <div  >
                <div  >

                <table className="table" >
                    <thead>
                      <tr>
                          <th>LEVEL</th>
                          <th>START DATE</th>
                          <th>END DATE</th>
                          <th>CERTIFICATE AWARDED</th>
                          <th>INSTITUTION</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody>
                </table>

                </div>
                <div className="col-sm-4">
                  <button className="btn btn-primary" onClick={(e)=>handleUpdate(e)}>UPDATE</button>
                </div>
            </div>
        </div>
    )

}
export default AddDeleteTableRows
