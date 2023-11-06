import fs from "fs";
const pokemonsJson = JSON.parse(fs.readFileSync("./db/pokemons.json", "utf8"));

export function getPokemonsController(req, res) {
  return res.status(200).json(pokemonsJson);
}

export function getPokemonService(id) {
  const pokemon = pokemonsJson.find((poke) => poke.id === id);
  if (pokemon) {
    return pokemon;
  } else {
    return false;
  }
}

export function getMyPokemonsController(req, res) {
  const user_id = Number(req.params.id);
  const pokemons = pokemonsJson.filter((poke) => poke.user_id === user_id);
  if (pokemons) {
    return res.status(200).json(pokemons);
  } else {
    return res.status(400).json(false);
  }
}

export function addPokemonMyPokedexController(req, res) {
  const data = req.body;

  pokemonsJson.push({ ...data, id: pokemonsJson.length + 1 });

  fs.writeFileSync("./db/pokemons.json", JSON.stringify(pokemonsJson, null, 2));
  return res.status(200).json();
}
