
const Findcarttotal = () => {
 const cart = [ 
    { product: "Laptop", price: 50000 },
     { product: "Mouse", price: 500 },
      { product: "Keyboard", price: 1500 } 
    ];

    const totalcart=cart.reduce((sum,product)=>{
        return product.price+sum
    },0)



  return (
    <>   
    
    
     <div className="bg-amber-200 text-black w-80 h-50 flex gap-5 p-5">
        {cart.map((e)=>(
            <div key={e.id}>
                <h2>Product Name: {e.product}</h2>
                <h2>Price: {e.price}</h2>

            </div>
        ))}
      
    </div>
    {totalcart &&
    
           <p>Total Amount: {totalcart}</p>


    }
    </>

  )
}

export default Findcarttotal
