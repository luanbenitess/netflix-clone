function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {movies.map((movie) => (
        <div key={movie._id} className="bg-zinc-800 p-4 rounded shadow">
          <img
            src={movie.coverImage}
            alt={movie.title}
            className="w-full h-72 object-cover rounded mb-3"
          />
          <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
          <p className="text-sm text-gray-300">{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
