const Templateliterals = () => {
  const name = "Ravi";
  const role = "MERN Developer";
  const company = "Infosys";

  const message = `My Name is ${name} and I'm a ${role} working at ${company}.`;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Template Literals Example
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">
              Name:
            </h2>
            <p className="text-lg text-blue-600">{name}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">
              Role:
            </h2>
            <p className="text-lg text-green-600">{role}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-700">
              Company:
            </h2>
            <p className="text-lg text-purple-600">{company}</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg">
          <h2 className="font-semibold mb-2">
            Template Literal Output:
          </h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Templateliterals;