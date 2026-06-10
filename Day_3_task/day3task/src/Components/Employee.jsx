import { useState } from "react"

const Employee = () => {

const [empdata,setEmpdata]=useState({
    empname:"",
    empdepartment:"",
    empsalary:""
})
const [displaydata,setDisplaydata]=useState([])

const handlechange=(e)=>{
    setEmpdata({...empdata,[e.target.name]:e.target.value})
}
const handlesubmit=(e)=>{
    e.preventDefault()
    setDisplaydata([...displaydata,empdata])
    setEmpdata({
        empname:"",
    empdepartment:"",
    empsalary:""
    }
    )
}
  return (
    <>
    <div className='flex flex-col bg-amber-50 text-black items-center justify-center p-10 gap-10 h-100 w-200'>
      <div className='flex flex-col bg-blue-800 text-white justify-center items-center gap-5 p-10 h-50 w-100 '>
        <input type="text" placeholder='Enter Employee Name' name='empname' value={empdata.empname} onChange={handlechange} />
                <input type="text" placeholder='Enter Employee Department' name='empdepartment' value={empdata.empdepartment} onChange={handlechange} />
        <input type="number" placeholder='Enter Employee Salary' name='empsalary' value={empdata.empsalary}  onChange={handlechange} />
          <button onClick={handlesubmit} className="bg-black text-white w-50 rounded h-20">Submit</button>
      </div>
      <h3>Total Employees: {displaydata.length}</h3>
      {displaydata.map((e,i)=>(
        <div key={i}> 
        <h3>Employee Name:{e.empname}</h3>
                <h3>Employee Department:{e.empdepartment}</h3>
        <h3>Employee Salary:{e.empsalary}</h3>
        </div>
      ))}
    </div>
    </>
  )
}

export default Employee
