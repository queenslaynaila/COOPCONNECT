import { useState } from "react"

 import WorkTableRows from "./WorkTableRows";
function AddDeleteWork({seeker}){


    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            jobtitle :'',
            description:'',
            startdate:'',
            enddate:'',
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
        fetch(`/experiences`, {
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
                          <th>JOBTITLE </th>
                          <th>START DATE</th>
                          <th>END DATE</th>
                          <th>SUMMARY</th>

                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <WorkTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

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
export default AddDeleteWork
