const Spreadopertaor = () => {
  const frontend = ["HTML", "CSS", "JavaScript"];
  const backend = ["Node.js", "MongoDB"];

  const fullstack = [...frontend, ...backend];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Frontend Technologies */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Frontend Technologies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {frontend.map((tech, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-md text-center"
          >
            <h2 className="text-lg font-semibold text-blue-700">
              {tech}
            </h2>
          </div>
        ))}
      </div>

      {/* Backend Technologies */}
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        Backend Technologies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {backend.map((tech, index) => (
          <div
            key={index}
            className="bg-green-50 border border-green-200 p-5 rounded-xl shadow-md text-center"
          >
            <h2 className="text-lg font-semibold text-green-700">
              {tech}
            </h2>
          </div>
        ))}
      </div>

      {/* Full Stack Technologies */}
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Full Stack Technologies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {fullstack.map((tech, index) => (
          <div
            key={index}
            className="bg-purple-50 border border-purple-200 p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-purple-700 text-center">
              {tech}
            </h2>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="max-w-md mx-auto bg-purple-600 text-white p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold">
          Total Technologies: {fullstack.length}
        </h2>
      </div>
    </div>
  );
};

export default Spreadopertaor;