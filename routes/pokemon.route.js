import express from "express";
import {
  addPokemonMyPokedexController,
  getMyPokemonsController,
} from "../controllers/pokemon.controller.js";
const router = express.Router();

router.get("/pokemons/user/:id", getMyPokemonsController);

router.post("/pokemons", addPokemonMyPokedexController);

export default router;
