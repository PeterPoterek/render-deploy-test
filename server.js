import express from "express";
import { faker } from "@faker-js/faker";

const app = express();

app.get("/random-data", (req, res) => {
  const userArr = [];
  for (let i = 0; i < 5; i++) {
    const randomUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };
    userArr.push(randomUser);
  }
  return res.status(200).json(userArr);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
