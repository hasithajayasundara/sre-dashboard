const { uuid } = require("uuidv4");
const moment = require("moment");
const faker = require("faker");

module.exports = {
  from: 1123243242340,
  to: 1234324234,
  total: 20,
  items: [
    {
      id: uuid(),
      name: "Timeseries",
      imageUrl: faker.image.avatar(),
      updatedAt: moment().subtract(2, "hours")
    },
    {
      id: uuid(),
      name: "Console",
      imageUrl: faker.image.avatar(),
      updatedAt: moment().subtract(2, "hours")
    },
    {
      id: uuid(),
      name: "Assets",
      imageUrl: faker.image.avatar(),
      updatedAt: moment().subtract(3, "hours")
    },
    {
      id: uuid(),
      name: "Jetfire",
      imageUrl: faker.image.avatar(),
      updatedAt: moment().subtract(5, "hours")
    },
    {
      id: uuid(),
      name: "Jenkins",
      imageUrl: faker.image.avatar(),
      updatedAt: moment().subtract(9, "hours")
    }
  ]
};
