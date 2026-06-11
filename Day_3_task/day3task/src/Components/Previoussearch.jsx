import { useState, useRef, useEffect } from "react";

const Previoussearch = () => {
  const [search, setSearch] = useState("");
  const previoussearch = useRef("");

  useEffect(() => {
    previoussearch.current = search;
  }, []);

  const handleChange = (e) => {
    previoussearch.current = search;
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          Previous Search Tracker
        </h1>

        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={handleChange}
          className="w-full border p-2 rounded-md mb-4"
        />

        <div className="space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Current Search:</span> {search}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Previous Search:</span>
            {previoussearch.current}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Previoussearch;