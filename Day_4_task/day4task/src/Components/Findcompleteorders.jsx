const Findcompleteorders = () => {
  const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" },
  ];

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  const findbyid=orders.find((e)=>(e.id==3))

  const totalamount=orders.reduce((sum,e)=>{
    return sum+e.amount
  },0)

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      {/* All Orders Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        All Orders
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {order.customer}
            </h2>

            <p className="text-gray-600">
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Amount:</span> ₹{order.amount}
            </p>

            <p
              className={`mt-2 font-semibold ${
                order.status === "Completed"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              Status: {order.status}
            </p>
          </div>
        ))}
      </div>

      {/* Completed Orders Section */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Completed Orders
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {completedOrders.map((order) => (
          <div
            key={order.id}
            className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {order.customer}
            </h2>

            <p className="text-gray-600">
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Amount:</span> ₹{order.amount}
            </p>

            <p className="mt-2 font-semibold text-green-600">
              Status: {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Find Order By ID */}
<h1 className="text-4xl font-bold text-center text-purple-600 my-8">
  Order Found By ID
</h1>

<div className="flex justify-center">
  {findbyid && (
    <div
      key={findbyid.id}
      className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition w-full max-w-md"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {findbyid.customer}
      </h2>

      <p className="text-gray-600">
        <span className="font-semibold">Order ID:</span> {findbyid.id}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Amount:</span> ₹{findbyid.amount}
      </p>

      <p className="mt-2 font-semibold text-green-600">
        Status: {findbyid.status}
      </p>
    </div>
  )}
</div>
<div>
 {totalamount && (
  <div className="text-center mt-6">
    <h2 className="text-2xl font-bold text-green-600">
      Total Amount: ₹{totalamount}
    </h2>
  </div>
)}</div>
    </>
    
  );
};

export default Findcompleteorders;