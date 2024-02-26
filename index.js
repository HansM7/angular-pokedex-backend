import express from "express";
import userRouter from "./routes/user.route.js";
import pokemonRouter from "./routes/pokemon.route.js";
import cors from "cors";
import "dotenv/config.js";
import cohortRoute from "./routes/cohort.route.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", userRouter);
app.use("/api", pokemonRouter);
app.use("/api", cohortRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
