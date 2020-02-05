import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Assets',
    latencyValue: '123ms',
    latencySLO: '98%',
    errorValue: '12%',
    errorSLO: '98%'
  },
  {
    id: uuid(),
    name: 'Events',
    latencyValue: '123ms',
    latencySLO: '98%',
    errorValue: '12%',
    errorSLO: '98%'
  },
  {
    id: uuid(),
    name: 'Time Series',
    latencyValue: '123ms',
    latencySLO: '98%',
    errorValue: '12%',
    errorSLO: '98%'
  },
  {
    id: uuid(),
    name: 'Files',
    latencyValue: '123ms',
    latencySLO: '98%',
    errorValue: '12%',
    errorSLO: '98%'
  }
];
