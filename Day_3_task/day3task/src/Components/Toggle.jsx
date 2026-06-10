import { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={toggleMode}
        className="border px-4 py-2 rounded"
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <p className="mt-4">
        Current Mode: {darkMode ? "Dark" : "Light"}
      </p>
    </div>
  );
};

export default Toggle;