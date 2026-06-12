

const Findbyid = () => {

    const users = [
         { id: 1, name: "Sudhan" }, 
         { id: 2, name: "Kumar" }, 
         { id: 3, name: "Ravi" } ]


    const finddata=users.find((e,i)=>(i==2))



  return (
    <>
    <h1 className="text-2xl ">Employee Details </h1>
    {users.map((e)=>(
        <div key={e.id} className="p-3 bg-blue-500">
            <h2>id : {e.id}</h2>
            <h2>name: {e.name}</h2>
      
    </div>    ))}
            <h2>Find the Data Using The Id</h2>


    {finddata &&(

        <div className=" bg-black text-white">
            <h2>id : {finddata.id}</h2>
            <h2>name: {finddata.name}</h2>
      
    </div>

    )}

    
    </>
  )
}

export default Findbyid
