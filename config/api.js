import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  timeout: 3000,
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "89cc51ada9msh83bf3608fd858bbp195c48jsnf69a42b72b9c",
  },
});

export default clienteAxios;