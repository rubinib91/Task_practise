import { add, sub } from "./Math"

const Importandexport = () => {
  const addition = add(20, 10);
  const subtraction = sub(20, 10);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Import & Export Example
        </h1>

        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-700">
              Addition Result
            </h2>
            <p className="text-xl">{addition}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700">
              Subtraction Result
            </h2>
            <p className="text-xl">{subtraction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importandexport;