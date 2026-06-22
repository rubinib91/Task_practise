
const Mark=()=>{
  const students = [
    {
      id: 1,
      name: "Ravi",
      marks: [90, 85, 88],
    },
    {
      id: 2,
      name: "Priya",
      marks: [75, 80, 70],
    },
    {
      id: 3,
      name: "Karthik",
      marks: [95, 92, 98],
    },
    {
      id: 4,
      name: "Anu",
      marks: [35, 40, 30],
    },
  ];

  // Calculate Total & Average
  const resultData = students.map((student) => {
    const total = student.marks.reduce(
      (sum, mark) => sum + mark,
      0
    );

    const average = (total / student.marks.length).toFixed(2);

    const status =
      student.marks.every((mark) => mark >= 35)
        ? "Pass"
        : "Fail";

    return {
      ...student,
      total,
      average,
      status,
    };
  });

  // Find Topper
  const topper = resultData.reduce((top, student) =>
    student.total > top.total ? student : top
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Online Exam Result System
        </h1>

        {/* Topper Card */}
        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-yellow-700">
            🏆 Topper Student
          </h2>

          <p>
            {topper.name} - {topper.total} Marks
          </p>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Marks</th>
                <th className="p-3">Total</th>
                <th className="p-3">Average</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {resultData.map((student) => (
                <tr
                  key={student.id}
                  className="border-b text-center hover:bg-gray-100"
                >
                  <td className="p-3">{student.name}</td>

                  <td className="p-3">
                    {student.marks.join(", ")}
                  </td>

                  <td className="p-3">{student.total}</td>

                  <td className="p-3">{student.average}</td>

                  <td
                    className={`p-3 font-bold ${
                      student.status === "Pass"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {student.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Mark