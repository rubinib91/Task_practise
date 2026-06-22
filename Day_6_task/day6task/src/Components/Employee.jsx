import { useState } from "react";

const Employee=()=> {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ravi",
      checkIn: "09:00",
      checkOut: "18:00",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
    },
  ]);

  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [status, setStatus] = useState("Present");
  const [search, setSearch] = useState("");

  const addEmployee = () => {
    if (!name) return;

    const newEmployee = {
      id: Date.now(),
      name,
      checkIn: checkIn || "-",
      checkOut: checkOut || "-",
      status,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setCheckIn("");
    setCheckOut("");
    setStatus("Present");
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const presentEmployees = employees.filter(
    (emp) => emp.status === "Present"
  );

  const absentEmployees = employees.filter(
    (emp) => emp.status === "Absent"
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Employee Attendance Tracker
        </h1>

        {/* Form */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="time"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="time"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>Present</option>
            <option>Absent</option>
          </select>
        </div>

        <button
          onClick={addEmployee}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Add Employee
        </button>

        {/* Search */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h2 className="font-bold text-green-700">
              Present Employees
            </h2>
            <p className="text-2xl">{presentEmployees.length}</p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg text-center">
            <h2 className="font-bold text-red-700">
              Absent Employees
            </h2>
            <p className="text-2xl">{absentEmployees.length}</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h2 className="font-bold text-blue-700">
              Total Present Count
            </h2>
            <p className="text-2xl">{presentEmployees.length}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Check In</th>
                <th className="p-3">Check Out</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b text-center hover:bg-gray-100"
                >
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.checkIn}</td>
                  <td className="p-3">{emp.checkOut}</td>
                  <td
                    className={`p-3 font-semibold ${
                      emp.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {emp.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Employee Lists */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Present Employees
            </h2>

            <ul className="list-disc ml-5">
              {presentEmployees.map((emp) => (
                <li key={emp.id}>{emp.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-red-700 mb-2">
              Absent Employees
            </h2>

            <ul className="list-disc ml-5">
              {absentEmployees.map((emp) => (
                <li key={emp.id}>{emp.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;