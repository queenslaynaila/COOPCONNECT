import { useState } from "react"
 import SkillsTableRows from "./SkillsTableRows";
function AddDeleteSkills({seeker}){


    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{

        const rowsInput={
            seeker_id:seeker.id,
            skillname:'',
            skilldescription:''
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
    e.preventDefault()
    rowsData.forEach((row)=>{
        fetch('/keyskills', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(row)
          }).then(res => {
            if(res.ok){
                res.json().then((user)=>{
                  console.log(user)
                })}
          });
    })

}
    return(
        <div className="container">

                <div  >

                <table className="table">
                    <thead>
                      <tr>
                          <th>Skill</th>
                          <th>Description</th>

                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <SkillsTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody>
                </table>
                <div className="col-sm-4">
                  <button className="btn btn-primary" onClick={(e)=>handleUpdate(e)}>UPDATE</button>
                </div>
                </div>


        </div>
    )

}
export default AddDeleteSkills
