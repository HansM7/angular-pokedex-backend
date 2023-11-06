import fs from "fs";
const usersJson = JSON.parse(fs.readFileSync("./db/users.json", "utf8"));

export function getUserController(req, res) {
  const id = Number(req.params.id);
  const user = usersJson.find((user) => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json();
  }
}

export function registerUserController(req, res) {
  const body = req.body;
  const data = {
    id: usersJson.length + 1,
    username: body.username,
    password: body.password,
  };
  usersJson.push(data);
  fs.writeFileSync("./db/users.json", JSON.stringify(usersJson, null, 2));
  res.status(201).json(data);
}

export function loginController(req, res) {
  const { username, password } = req.body;
  const response = usersJson.find(
    (user) => user.username === username && user.password === password
  );
  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(400).json(false);
  }
}
