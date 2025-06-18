import { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  // busca os filmes quando a página carrega
  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // adiciona novo filme na lista (sem precisar recarregar)
  const handleAddMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Netflix Clone</h1>
      <MovieForm onAdd={handleAddMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;