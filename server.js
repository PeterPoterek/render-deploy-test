const express = require("express");
const faker = require("@faker-js/faker");

const app = express();

app.get("/random-data", (req, res) => {
  const randomData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
  };
  res.json(randomData);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
