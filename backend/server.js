const express = require('express'); // Como criar um servidor em Nojde.js?
const mongoose = require('mongoose'); // Como conectar o Nojde.js ao MongoDB?
const dotenv = require('dotenv'); // Como proteger informações sensiveis no Nojde.js?
const cors = require('cors'); // Como permitir requisições de outros domínios no Node.js?

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send("API do Netflix Clone funcionando!");
});

const Movie = require("./models/movie"); // Importando o modelo de dados do filme

app.post("/movies", async (req, res) => {
    try {
        const { title, description, coverImage } = req.body;
        const newMovie = new Movie({ title, description, coverImage });
        await newMovie.save();
    
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar o filme" });
    }
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Conexão com o MongoDB estabelecida com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error);
    });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 5000}`);
});