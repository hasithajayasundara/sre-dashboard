const { uuid } = require("uuidv4");

module.exports = {
  total: 50,
  tickets: [
    {
      id: uuid(),
      ref: "SRE-334",
      amount: 30.5,
      customer: {
        name: "Customer cannot log in to Console"
      },
      createdAt: 1555016400000,
      status: "In Progress"
    },
    {
      id: uuid(),
      ref: "SRE-122",
      amount: 25.1,
      customer: {
        name: "CDF timeseries very slow"
      },
      createdAt: 1555016400000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-997",
      amount: 10.99,
      customer: {
        name: "Internal services not logging to stackdriver"
      },
      createdAt: 1554930000000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-110",
      amount: 96.43,
      customer: {
        name: "Customer cannot log in to OpsInt"
      },
      createdAt: 1554757200000,
      status: "Waiting Cust"
    },
    {
      id: uuid(),
      ref: "SRE-990",
      amount: 32.54,
      customer: {
        name: "Jetfire very slow"
      },
      createdAt: 1554670800000,
      status: "Ready"
    },
    {
      id: uuid(),
      ref: "SRE-1000",
      amount: 16.76,
      customer: {
        name: "I cannot find the newly defined button in console"
      },
      createdAt: 1554670800000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-1000",
      amount: 16.76,
      customer: {
        name: "I cannot find the newly defined button in console"
      },
      createdAt: 1554670800000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-1000",
      amount: 16.76,
      customer: {
        name: "I cannot find the newly defined button in console"
      },
      createdAt: 1554670800000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-1000",
      amount: 16.76,
      customer: {
        name: "I cannot find the newly defined button in console"
      },
      createdAt: 1554670800000,
      status: "Done"
    },
    {
      id: uuid(),
      ref: "SRE-1000",
      amount: 16.76,
      customer: {
        name: "I cannot find the newly defined button in console"
      },
      createdAt: 1554670800000,
      status: "Done"
    }
  ]
};
