const Nullishcoalescing = () => {
  const userName = null;

  const displayName = userName ?? "Guest User";

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Nullish Coalescing Operator Example
        </h1>

        <h2 className="text-lg">
          User Name: <span className="font-semibold">{displayName}</span>
        </h2>
      </div>
    </div>
    </>
  );
};

export default Nullishcoalescing;