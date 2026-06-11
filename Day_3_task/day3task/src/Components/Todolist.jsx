import { useState } from "react"

const Todolist = () => {

  const [task,setTask]=useState("")
  const [display,setDisplay]=useState([])

  const handlechange=(e)=>{
    setTask(e.target.value)
  }
const handleadd=()=>{

  setDisplay([...display,task])
   setTask("")
}

const handledelete=(index)=>{

  const updated=display.filter((_,i)=>i!=index)
  setDisplay(updated)
}


  return (
    <>
    <div className="bg-amber-200 text-black p-5 flex flex-col gap-5 justify-center items-center">
      
      <div className="bg-black text-white flex items-center justify-center w-100 h-50 p-5 gap-5">
           <input type="text" placeholder='Enter Task' value={task} onChange={handlechange} />
      <button className="bg-blue-500 text-white h-10 w-30 rounded" onClick={handleadd}>Add Task</button>
                          </div>

      {display.map((e,i)=>(
        <div key={i} className="flex gap-5">
           <p className="">{e}</p>
                 <button className="bg-blue-500 text-white h-10 w-30 rounded"  onClick={()=>handledelete(i)}>Delete Task</button>

        </div>
      ))}

      </div>
    </>
  )
}

export default Todolist
