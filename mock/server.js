const express = require("express");
const bodyParser = require("body-parser");
const jiraMock = require("./jiraMock");
const deploymentsMock = require("./deploymentsMock");
const clientMSRMock = require("./clientMSRMock");
const sdkMSR = require("./sdkMSR");
const sloFiltersMock = require("./sloFIltersMock");

const app = express();
app.use(bodyParser.json({ type: "*/*" }));

app.get("/api/dashboard/metrics/errorRate", (req, res) => {
  setTimeout(() => {
    res.send({
      value: "80.8%",
      trend: {
        value: "5%",
        slope: -1,
        description: "Since last month"
      }
    });
  }, 2000);
});

app.get("/api/dashboard/metrics/latency", (req, res) => {
  setTimeout(() => {
    res.send({
      value: "90.6%",
      trend: {
        value: "5%",
        slope: 1,
        description: "Since last month"
      }
    });
  }, 2000);
});

app.get("/api/dashboard/metrics/totalUsers", (req, res) => {
  setTimeout(() => {
    res.send({
      value: "855",
      trend: {
        value: "12%",
        slope: -1,
        description: "Since last month"
      }
    });
  }, 2000);
});

app.get("/api/dashboard/metrics/errorBudget", (req, res) => {
  setTimeout(() => {
    res.send({
      value: "55.5%",
      trend: {
        value: "10%",
        slope: 1,
        description: "Since last month"
      }
    });
  }, 2000);
});

app.post("/api/dashboard/jira/tickets", (req, res) => {
  setTimeout(() => {
    res.send(jiraMock);
  }, 2000);
});

app.post("/api/dashboard/deployments", (req, res) => {
  setTimeout(() => {
    res.send(deploymentsMock);
  }, 2000);
});

app.post("/api/dashboard/clientMSR", (req, res) => {
  setTimeout(() => {
    res.send(clientMSRMock);
  }, 2000);
});

app.get("/api/dashboard/sdkMSR", (req, res) => {
  setTimeout(() => {
    res.send(sdkMSR);
  }, 2000);
});

app.get("/api/slo/filters", (req, res) => {
  setTimeout(() => {
    res.send(sloFiltersMock);
  }, 2000);
});

app.post("/api/slo/sloGraph", (req, res) => {
  setTimeout(() => {
    res.send({ success: true });
  }, 2000);
});

app.listen(5220);
