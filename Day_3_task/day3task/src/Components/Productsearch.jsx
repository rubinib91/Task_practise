import { useState } from "react";

const Productsearch = () => {
  const productlist = [
    { name: "books", price: 100 },
    { name: "note", price: 50 },
    { name: "pen", price: 30 },
    { name: "pencil", price: 10 }
  ];

  const [search, setSearch] = useState("");

  const filterproducts = productlist.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
            <div  className="bg-blue-900 text-white p-5">

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={handlechange}
      />
      </div>

      {filterproducts.length > 0 ? (
        <div className="bg-red-300 text-white flex flex-col p-5 gap-5">
          {filterproducts.map((e, i) => (
            <div key={i}>
              <p>Product Name: {e.name}</p>
              <p>Product Price: {e.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Productsearch;