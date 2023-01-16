import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(

        rowsData.map((data, index)=>{
            const {level, startdate, enddate,certificatename,institution}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={level} onChange={(evnt)=>(handleChange(index, evnt))} name="level" className="form-control"/>
                </td>
                <td><input type="date" value={startdate}  onChange={(evnt)=>(handleChange(index, evnt))} name="startdate" className="form-control"/> </td>
                <td><input type="date" value={enddate}  onChange={(evnt)=>(handleChange(index, evnt))} name="enddate" className="form-control" /> </td>
                <td><input type="text" value={certificatename}  onChange={(evnt)=>(handleChange(index, evnt))} name="certificatename" className="form-control" /> </td>
                <td><input type="text" value={institution}  onChange={(evnt)=>(handleChange(index, evnt))} name="institution" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })

    )

}

export default TableRows;
