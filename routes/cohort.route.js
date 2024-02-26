import express from "express";
import {
  deleteCohort,
  getCohort,
  postCohort,
} from "../controllers/cohort.controller.js";

const cohortRoute = express.Router();

cohortRoute.post("/cohort-12", postCohort);

cohortRoute.get("/cohort-12", getCohort);
cohortRoute.delete("/cohort-12/:id", deleteCohort);

export default cohortRoute;
