
const Employee = () => {
  const employees = [
    { id: 1, name: "John", salary: 25000 },
    { id: 2, name: "David", salary: 45000 },
    { id: 3, name: "Sam", salary: 60000 },
    { id: 4, name: "Peter", salary: 30000 },
  ];

  const filteredEmployees = employees.filter(
    (employee) => employee.salary > 40000
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            All Employees
          </h1>

          {employees.map((employee) => (
            <div
              key={employee.id}
              className="border p-3 rounded-md mb-3"
            >
              <h2 className="font-semibold">{employee.name}</h2>
              <p>Salary: ₹{employee.salary}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">
            Employees with Salary Greater than ₹40,000
          </h1>

      
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="border p-3 rounded-md mb-3 bg-green-50"
            >
              <h2 className="font-semibold">{employee.name}</h2>
              <p className="text-green-600 font-medium">
                Salary: ₹{employee.salary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Employee;