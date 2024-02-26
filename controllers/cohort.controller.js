import fs from "fs";
const cohortJson = JSON.parse(fs.readFileSync("./db/cohort.json", "utf8"));

export function postCohort(req, res) {
  const data = req.body;
  const token = req.get("Authorization");
  if (token === "cohort-12") {
    const { name, image, description } = data;
    cohortJson.push({ name, image, description, id: cohortJson.length + 1 });
    fs.writeFileSync("./db/cohort.json", JSON.stringify(cohortJson, null, 2));
    res.status(201).json({ ok: true, message: "user created" });
  } else {
    res.status(500).json({ ok: false, data: null, message: "Error" });
  }
}

export function getCohort(req, res) {
  const token = req.get("Authorization");

  if (token === "cohort-12") {
    res.status(201).json({ ok: true, data: cohortJson, message: "cohort 12" });
  } else {
    res.status(500).json({ ok: false, message: "Error" });
  }
}

export function deleteCohort(req, res) {
  const token = req.get("Authorization");

  if (token === "abc-admin") {
    const dataFiltered = cohortJson.filter(
      (c) => c.id !== Number(req.params.id)
    );
    fs.writeFileSync("./db/cohort.json", JSON.stringify(dataFiltered, null, 2));
    res.status(201).json({ ok: true, data: null, message: "cohort 12 edited" });
  } else {
    res.status(500).json({ ok: false, message: "Error" });
  }
}
