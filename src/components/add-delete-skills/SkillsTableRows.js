function SkillsTableRows({rowsData, deleteTableRows, handleChange}) {


    return(

        rowsData.map((data, index)=>{
            const {skillname, skilldescription}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={skillname} onChange={(evnt)=>(handleChange(index, evnt))} name="skillname" className="form-control"/>
                </td>
                <td><input type="text" value={skilldescription}  onChange={(evnt)=>(handleChange(index, evnt))} name="skilldescription" className="form-control"/> </td>
                 
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })

    )

}

export default SkillsTableRows;
