    import { useState } from "react"

    const Movie = () => {

    const Moviebooking=[
    {movieid:1,moviename:"karupu",amount:250,seats:4},
    {movieid:2,moviename:"Leo",amount:200,seats:6},
    {movieid:3,moviename:"Jananayagan",amount:300,seats:8},

    ]
    const [selectedmovie,setSelectedmovie]=useState(null)
    const [tickets,setTickets]=useState(null)
    let display=""

    const handleclick=(m)=>{
        setSelectedmovie(m)


    }

    const handlechange=(e)=>{
        setTickets(e.target.value)
    
    }
    if(selectedmovie && tickets>selectedmovie.seats)
    {
    display="Insufficient Tickets "
    }

    return (
        <>
        <div>
            {Moviebooking.map((m)=>(
                
            <div key={m.movieid}>
                <p>Movie Name:{m.moviename}</p>
                <p>Ticket Cost:{m.amount}</p>
                <p>Available Seats:{m.seats}</p>
                <button onClick={()=>handleclick(m)}>Book Now</button>
            </div>

            ))}
        
        </div>
        {selectedmovie &&(
            <div>
                <p>Movie Name:{selectedmovie.moviename}</p>
                <p>Ticket Cost:{selectedmovie.amount}</p>
                <p>Available Seats:{selectedmovie.seats}</p>
                <input type="number" placeholder="Enter Number of tickets" value={tickets} onChange={handlechange}/>


            </div>

        )}
                        <p>{display}</p>

        
        </>
        
    )
    }

    export default Movie
