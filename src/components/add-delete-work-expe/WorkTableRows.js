import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function WorkTableRows({rowsData, deleteTableRows, handleChange}) {


    return(

        rowsData.map((data, index)=>{
            const {jobtitle,description,startdate,enddate}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={jobtitle} onChange={(evnt)=>(handleChange(index, evnt))} name="jobtitle" className="form-control"/>
                </td>
                <td><input type="date" value={startdate}  onChange={(evnt)=>(handleChange(index, evnt))} name="startdate" className="form-control"/> </td>
                <td><input type="date" value={enddate}  onChange={(evnt)=>(handleChange(index, evnt))} name="enddate" className="form-control" /> </td>
                <td><input type="text" value={description}  onChange={(evnt)=>(handleChange(index, evnt))} name="description" className="form-control" /> </td>

                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })

    )

}

export default WorkTableRows;
