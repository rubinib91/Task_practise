const DefaultParameters = () => {
  const welcomeUser = (name = "Guest") => {
    return `Welcome ${name}`;
  };

  return (
    <>    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Default Parameters Example
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-700">
              Without Parameter
            </h2>
            <p>{welcomeUser()}</p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h2 className="font-semibold text-green-700">
              With Parameter
            </h2>
            <p>{welcomeUser("Ravi")}</p>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default DefaultParameters;