const Studentmanagementsystem = () => {
  const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Karthik", mark: 45 },
    { id: 3, name: "Vijay", mark: 92 },
    { id: 4, name: "Ajay", mark: 35 },
  ];

  const passmarks = students.filter((s) => s.mark >= 50);

  const totalmarks = students.reduce((sum, s) => {
    return sum + s.mark;
  }, 0);

  const avgmarks = (totalmarks / students.length).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Student Management System
      </h1>

      {/* All Students */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        All Students
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {students.map((s) => (
          <div
            key={s.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {s.name}
            </h3>

            <p className="text-gray-600 mt-2">
              Student ID: {s.id}
            </p>

            <p
              className={`font-semibold mt-2 ${
                s.mark >= 50 ? "text-green-600" : "text-red-600"
              }`}
            >
              Mark: {s.mark}
            </p>
          </div>
        ))}
      </div>

      {/* Passed Students */}
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Passed Students
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {passmarks.map((s) => (
          <div
            key={s.id}
            className="bg-green-50 border border-green-200 p-5 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {s.name}
            </h3>

            <p className="text-gray-600 mt-2">
              Student ID: {s.id}
            </p>

            <p className="font-semibold text-green-600 mt-2">
              Mark: {s.mark}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">
            Total Marks
          </h2>
          <p className="text-3xl font-bold">{totalmarks}</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">
            Average Marks
          </h2>
          <p className="text-3xl font-bold">{avgmarks}</p>
        </div>
      </div>
    </div>
  );
};

export default Studentmanagementsystem;