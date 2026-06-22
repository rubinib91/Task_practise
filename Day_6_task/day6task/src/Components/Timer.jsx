import{ useState, useEffect } from "react";

const Timer=()=> {
  // Digital Clock
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  // Stopwatch
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const resume = () => {
    setIsRunning(true);
  };

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        
        {/* Digital Clock */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Digital Clock
        </h1>

        <div className="bg-gray-900 text-green-400 text-4xl font-mono py-4 rounded-xl shadow-inner mb-8">
          {currentTime.toLocaleTimeString()}
        </div>

        {/* Stopwatch */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Stopwatch
        </h1>

        <div className="bg-indigo-100 text-indigo-700 text-5xl font-bold py-6 rounded-xl mb-8">
          {hrs}:{mins}:{secs}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={start}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Start
          </button>

          <button
            onClick={stop}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Stop
          </button>

          <button
            onClick={resume}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Resume
          </button>

          <button
            onClick={reset}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;