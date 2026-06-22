import { useState } from "react";

const Movie=()=> {
  const movies = [
    { id: 1, name: "Leo", price: 200 },
    { id: 2, name: "Jailer", price: 250 },
    { id: 3, name: "Vikram", price: 180 },
    { id: 4, name: "Master", price: 220 },
  ];

  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [seats, setSeats] = useState("");

  const selectedMovie = movies.find(
    (movie) => movie.id === Number(selectedMovieId)
  );

  const totalAmount = selectedMovie
    ? selectedMovie.price * Number(seats || 0)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Movie Ticket Booking
        </h1>

        {/* Movie Selection */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Select Movie
          </label>

          <select
            value={selectedMovieId}
            onChange={(e) => setSelectedMovieId(e.target.value)}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Choose a Movie</option>

            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name} - ₹{movie.price}
              </option>
            ))}
          </select>
        </div>

        {/* Seats */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Number of Seats
          </label>

          <input
            type="number"
            min="1"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            placeholder="Enter seats"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Total Amount */}
        <div className="bg-purple-100 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold">
            Total Amount: ₹{totalAmount}
          </h2>
        </div>

        {/* Booking Summary */}
        {selectedMovie && seats > 0 && (
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              Booking Summary
            </h2>

            <p>
              <strong>Movie:</strong> {selectedMovie.name}
            </p>

            <p>
              <strong>Ticket Price:</strong> ₹{selectedMovie.price}
            </p>

            <p>
              <strong>Seats:</strong> {seats}
            </p>

            <p>
              <strong>Total:</strong> ₹{totalAmount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;