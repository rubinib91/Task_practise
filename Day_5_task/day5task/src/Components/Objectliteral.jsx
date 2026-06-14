const Objectliteral = () => {
  const name = "Priya";
  const role = "React Developer";

  const employee = {
    name,
    role,
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Enhanced Object Literal
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-700">Name</h2>
            <p>{employee.name}</p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h2 className="font-semibold text-green-700">Role</h2>
            <p>{employee.role}</p>
          </div>
        </div>

              </div>
    </div>
    </>
  );
};

export default Objectliteral;