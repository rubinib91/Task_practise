const Findbyid = () => {
  const users = [
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" },
  ];

  const finddata = users.find((e) => e.id === 3);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Employee Details
      </h1>

      {/* All Employees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {users.map((e) => (
          <div
            key={e.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              ID: {e.id}
            </h2>

            <h2 className="text-lg text-gray-600 mt-2">
              Name: {e.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Found Employee */}
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Employee Found Using ID
      </h2>

      {finddata && (
        <div className="max-w-md mx-auto bg-green-50 border border-green-300 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ID: {finddata.id}
          </h2>

          <h2 className="text-xl text-gray-700">
            Name: {finddata.name}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Findbyid;