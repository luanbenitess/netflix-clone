import { useState } from "react";

function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = { title, description, coverImage };

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setTitle("");
        setDescription("");
        setCoverImage("");
      })
      .catch((err) => console.log("Erro ao salvar:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-4 rounded mb-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-red-500">Adicionar Filme</h2>

      <input
        type="text"
        placeholder="Título"
        className="w-full mb-3 p-2 rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Descrição"
        className="w-full mb-3 p-2 rounded text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="URL da capa (imagem)"
        className="w-full mb-3 p-2 rounded text-black"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Salvar Filme
      </button>
    </form>
  );
}

export default MovieForm;
