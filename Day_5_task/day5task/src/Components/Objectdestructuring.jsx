const Objectdestructuring = () => {
  const student = {
    name: "Arun",
    course: "MERN",
    city: "Chennai",
  };

  const { name, course, city } = student;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Object Destructuring Example
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">Name</h2>
            <p className="text-lg text-blue-600">{name}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">Course</h2>
            <p className="text-lg text-green-600">{course}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">City</h2>
            <p className="text-lg text-purple-600">{city}</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="font-semibold mb-2">
            Destructured Values
          </h2>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
          <p>City: {city}</p>
        </div>
      </div>
    </div>
  );
};

export default Objectdestructuring;