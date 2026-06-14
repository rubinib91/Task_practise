const Restoperator = () => {
  const marks = [80, 90, 70, 60];

  const totalmarks = (...marks) => {
    return marks.reduce((sum, m) => sum + m, 0);
  };

  const total = totalmarks(...marks);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Rest Parameter Example
        </h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Marks List
        </h2>

        <div className="space-y-3">
          {marks.map((m, i) => (
            <div
              key={i}
              className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-center font-medium text-blue-700"
            >
              {m}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-green-600 text-white p-4 rounded-lg text-center shadow">
          <h2 className="text-2xl font-bold">
            Total Marks: {total}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Restoperator;