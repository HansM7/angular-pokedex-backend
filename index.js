import express from "express";
import userRouter from "./routes/user.route.js";
import pokemonRouter from "./routes/pokemon.route.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;

app.use("/api", userRouter);
app.use("/api", pokemonRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
