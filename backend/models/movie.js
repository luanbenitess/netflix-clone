const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    tittle: String,
    description: String,
    coverImage: String,
});

module.exports = mongoose.model("Movie", movieSchema);
// O modelo de dados do filme é definido usando o Mongoose, que é uma biblioteca do Node.js para modelagem de dados MongoDB.