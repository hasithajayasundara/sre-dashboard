const { uuid } = require("uuidv4");

module.exports = {
  sloTypes: [
    {
      id: uuid(),
      name: "serivce",
      services: [
        { id: uuid(), name: "Assets" },
        { id: uuid(), name: "Events" },
        { id: uuid(), name: "Files" },
        { id: uuid(), name: "Timeseries" }
      ]
    },
    {
      id: uuid(),
      name: "Application",
      services: [
        { id: uuid(), name: "OpsInt" },
        { id: uuid(), name: "Console" }
      ]
    },
    {
      id: uuid(),
      name: "Client",
      services: [{ id: uuid(), name: "AkerBp" }]
    },
    {
      id: uuid(),
      name: "Application",
      services: [
        { id: uuid(), name: "OpsInt" },
        { id: uuid(), name: "Console" }
      ]
    },
    {
      id: uuid(),
      name: "SDK",
      services: [
        { id: uuid(), name: "Python" },
        { id: uuid(), name: "Javascript" },
        { id: uuid(), name: "Scala" }
      ]
    },
    {
      id: uuid(),
      name: "Resource",
      services: [
        { id: uuid(), name: "Core Services" },
        { id: uuid(), name: "3D" }
      ]
    }
  ]
};
