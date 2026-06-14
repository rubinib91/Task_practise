const Findcarttotal = () => {
  const cart = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mouse", price: 500 },
    { id: 3, product: "Keyboard", price: 1500 },
  ];

  const totalcart = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white w-72 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {item.product}
            </h2>

            <p className="text-lg text-gray-600">
              Price:
              <span className="font-bold text-green-600 ml-2">
                ₹{item.price}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">
          Total Amount: ₹{totalcart}
        </h2>
      </div>
    </div>
  );
};

export default Findcarttotal;