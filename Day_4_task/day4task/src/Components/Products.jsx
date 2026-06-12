const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3">
              {e.name}
            </h2>

            <p className="text-gray-600 mb-4">
              Price: ₹{e.price}
            </p>

                      </div>
        ))}
      </div>
    </div>
  );
};

export default Products;