import { useEffect, useState } from 'react'

const Fetchdata =  () => {

    const [datas,setDatas]=useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{

  const fetchusers=async ()=>{

try
{
    const data=await fetch("https://dummyjson.com/users")
    const changedata=await  data.json()
    setDatas(changedata.users)

}
catch{
    console.log('Something Error')
}


}
fetchusers()

    },[])

const handlechange=(e)=>{
    setSearch(e.target.value)


}
    const filtername=datas.filter((user)=>(user.firstName.toLowerCase().includes (search.toLowerCase())))


  return (
    <>
    <div className=' bg-green-300 w-400 text-white text-2xl flex  flex-col items-center justify-center'>
       <h1>User Datas From API</h1>
        <h3>Total Users:{datas.length}</h3>

    
      </div>
      
        <div>
        <input type="text" placeholder='search User' onChange={handlechange} />

        </div>
    <div className='flex flex-wrap bg-black p-5 gap-5 justify-center items-stretch'>
        
         {filtername.map((e)=>(
        <div className='flex flex-col bg-blue-500 h-50 w-80 text-white p-5 gap-5' key={e.id}>
            <p>first Name :{e.firstName}</p>
            <p>Age: {e.age}</p>
            <p>Email:{e.email}</p>
            <p></p>
        </div>
    



       ))}
      
    </div>

    </>
  )
}

export default Fetchdata
