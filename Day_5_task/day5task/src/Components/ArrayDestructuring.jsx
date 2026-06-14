const ArrayDestructuring = () => {
  const colors = ["Red", "Blue", "Green"];

  const [color1, color2, color3] = colors;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Array Destructuring Example
        </h1>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Colors Displayed Using Map()
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {color}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Destructuring Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Colors Displayed Using Array Destructuring
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-600">
                First Color: {color1}
              </h3>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">
                Second Color: {color2}
              </h3>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600">
                Third Color: {color3}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayDestructuring;