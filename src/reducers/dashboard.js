import moment from 'moment';
import palette from 'google-palette';

import {
    FETCH_ERROR_RATE_SUCCESS,
    FETCH_LATENCY_SUCCESS,
    FETCH_TOTAL_USERS_SUCCESS,
    FETCH_ERROR_BUDGET_SUCCESS,
    FETCH_ERROR_RATE_FAILED,
    FETCH_LATENCY_FAILED,
    FETCH_TOTAL_USERS_FAILED,
    FETCH_ERROR_BUDGET_FAILED,
    FETCH_JIRA_TICKETS_FAILED,
    FETCH_JIRA_TICKETS_SUCCESS,
    CHANGE_JIRA_TICKET_FILTER,
    CHANGE_JIRA_TOCKET_CREATED_DATE,
    CHANGE_JIRA_TICKET_ROWS_PER_PAGE,
    FETCH_RECENT_DEPLOYMENTS_SUCCESS,
    FETCH_RECENT_DEPLOYMENTS_FAILED,
    CHANGE_RECENT_DEPLOYMENTS_DURATION,
    FETCH_CLIENT_MSR_SUCCESS,
    FETCH_CLIENT_MSR_FAILED,
    CHANGE_CLIENT_MSR_DAYS,
    FETCH_CLIENT_MSR,
    FETCH_SDK_MSR_SUCCESS,
    FETCH_SDK_MSR_FAILED,
    FETCH_SDK_MSR,
} from '../actions/types';

const initialState = {
    metrics: {
        errorRate: {
            fetching: true,
            error: null,
            value: 0,
            trend: {
                value: 0,
                slope: -1,
                description: '',
            },
        },
        latency: {
            fetching: true,
            error: null,
            value: 0,
            trend: {
                value: 0,
                slope: -1,
                description: '',
            },
        },
        totalUsers: {
            fetching: true,
            error: null,
            value: 0,
            trend: {
                value: 0,
                slope: -1,
                description: '',
            },
        },
        errorBudget: {
            fetching: true,
            error: null,
            value: 0,
            trend: {
                value: 0,
                slope: -1,
                description: '',
            },
        },
    },
    jira: {
        fetching: true,
        error: null,
        total: 0,
        filter: { skip: 0, limit: 10, dateOrder: 'desc', status: [] },
        tickets: [],
    },
    deployments: {
        fetching: true,
        error: null,
        total: 0,
        filter: {
            // Get deployments of last 24 hours
            from: moment()
                .subtract({ hours: 1 })
                .valueOf(),
            to: moment().valueOf(),
        },
        items: [],
    },
    clientMSR: {
        fetching: true,
        error: null,
        filter: {
            // Get deployments of last 7 days
            from: moment()
                .subtract({ days: 7 })
                .valueOf(),
            to: moment().valueOf(),
            days: 7,
        },
        dataSet: {
            labels: [],
            datasets: [],
        },
    },
    sdkMSR: {
        fetching: true,
        error: null,
        dataSet: [],
        pieChartData: {
            datasets: [
                {
                    data: [],
                    backgroundColor: [],
                },
            ],
            labels: [],
        },
    },
};

const dashboardReducer = (state = initialState, action) => {
    let errorRate = { ...state.metrics.errorRate };
    let latency = { ...state.metrics.latency };
    let totalUsers = { ...state.metrics.totalUsers };
    let errorBudget = { ...state.metrics.errorBudget };
    switch (action.type) {
        case FETCH_ERROR_RATE_SUCCESS:
            errorRate.fetching = false;
            errorRate.error = null;
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    errorRate: {
                        ...errorRate,
                        ...action.payload,
                    },
                },
            };
        case FETCH_ERROR_RATE_FAILED:
            errorRate.fetching = false;
            errorRate.error = 'An error occured while fetching data.';
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    errorRate,
                },
            };
        case FETCH_LATENCY_SUCCESS:
            latency.fetching = false;
            latency.error = null;
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    latency: {
                        ...latency,
                        ...action.payload,
                    },
                },
            };
        case FETCH_LATENCY_FAILED:
            latency.fetching = false;
            latency.error = 'An error occured while fetching data.';
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    latency,
                },
            };
        case FETCH_TOTAL_USERS_SUCCESS:
            totalUsers.fetching = false;
            totalUsers.error = null;
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    totalUsers: {
                        ...totalUsers,
                        ...action.payload,
                    },
                },
            };
        case FETCH_TOTAL_USERS_FAILED:
            totalUsers.fetching = false;
            totalUsers.error = 'An error occured while fetching data.';
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    totalUsers,
                },
            };
        case FETCH_ERROR_BUDGET_SUCCESS:
            errorBudget.fetching = false;
            errorBudget.error = null;
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    errorBudget: {
                        ...state.errorBudget,
                        ...action.payload,
                    },
                },
            };
        case FETCH_ERROR_BUDGET_FAILED:
            errorBudget.fetching = false;
            errorBudget.error = 'An error occured while fetching data.';
            return {
                ...state,
                metrics: {
                    ...state.metrics,
                    errorBudget,
                },
            };
        case FETCH_JIRA_TICKETS_SUCCESS:
            let { total, tickets } = action.payload;
            return {
                ...state,
                jira: {
                    ...state.jira,
                    total: total || 0,
                    tickets: tickets || [],
                    fetching: false,
                    error: null,
                },
            };
        case FETCH_JIRA_TICKETS_FAILED:
            return {
                ...state,
                jira: {
                    ...state.jira,
                    fetching: false,
                    error: 'An error occured while fetching data.',
                },
            };
        case CHANGE_JIRA_TICKET_FILTER:
            return {
                ...state,
                jira: {
                    ...state.jira,
                    fetching: true,
                    filter: { ...state.jira.filter, skip: action.payload },
                },
            };
        case CHANGE_JIRA_TOCKET_CREATED_DATE:
            return {
                ...state,
                jira: {
                    ...state.jira,
                    fetching: true,
                    filter: { skip: 0, limit: 10, dateOrder: action.payload },
                },
            };
        case CHANGE_JIRA_TICKET_ROWS_PER_PAGE:
            return {
                ...state,
                jira: {
                    ...state.jira,
                    fetching: true,
                    filter: {
                        ...state.jira.filter,
                        limit: action.payload,
                    },
                },
            };
        case FETCH_RECENT_DEPLOYMENTS_SUCCESS:
            let { total: deploymentsTotal, items } = action.payload;
            return {
                ...state,
                deployments: {
                    ...state.deployments,
                    total: deploymentsTotal || 0,
                    items: items || [],
                    error: null,
                    fetching: false,
                },
            };
        case FETCH_RECENT_DEPLOYMENTS_FAILED:
            return {
                ...state,
                deployments: {
                    ...state.deployments,
                    error: 'An error occured while fetching data',
                    fetching: false,
                },
            };
        case CHANGE_RECENT_DEPLOYMENTS_DURATION:
            return {
                ...state,
                deployments: {
                    ...state.deployments,
                    filter: {
                        ...action.payload,
                    },
                    fetching: true,
                },
            };
        case FETCH_CLIENT_MSR:
            return {
                ...state,
                clientMSR: {
                    ...state.clientMSR,
                    fetching: true,
                },
            };
        case FETCH_CLIENT_MSR_SUCCESS:
            let { datasets } = action.payload;
            let datasetObj = chartDataSetBuilder(
                datasets,
                state.clientMSR.filter.days
            );
            return {
                ...state,
                clientMSR: {
                    ...state.clientMSR,
                    dataSet: {
                        ...datasetObj,
                    },
                    error: null,
                    fetching: false,
                },
            };
        case FETCH_CLIENT_MSR_FAILED:
            return {
                ...state,
                clientMSR: {
                    ...state.clientMSR,
                    error: 'An error occured',
                    fetching: false,
                },
            };
        case CHANGE_CLIENT_MSR_DAYS:
            let msrDuration = action.payload;
            return {
                ...state,
                clientMSR: {
                    ...state.clientMSR,
                    filter: {
                        // Get deployments of last 7 days
                        from: moment()
                            .subtract({ days: msrDuration })
                            .valueOf(),
                        to: moment().valueOf(),
                        days: msrDuration,
                    },
                },
            };
        case FETCH_SDK_MSR:
            return {
                ...state,
                sdkMSR: {
                    ...state.sdkMSR,
                    fetching: true,
                },
            };
        case FETCH_SDK_MSR_SUCCESS:
            let sdkMSRDataset = action.payload;
            return {
                ...state,
                sdkMSR: {
                    ...state.sdkMSR,
                    fetching: false,
                    ...sdkDataSetBuilder(sdkMSRDataset),
                    error: null,
                },
            };
        case FETCH_SDK_MSR_FAILED:
            return {
                ...state,
                sdkMSR: {
                    ...state.sdkMSR,
                    fetching: false,
                    error: 'An error occured',
                },
            };
        default:
            return state;
    }
};

const chartDataSetBuilder = (datasets = [], days) => {
    let labels = [...new Array(days)].map((i, idx) =>
        moment()
            .startOf('day')
            .subtract(days - idx, 'days')
            .format('DD MMM')
    );
    let backgroundColors = palette('tol', datasets.length).map(
        hex => `#${hex}`
    );
    datasets = datasets.map((itm, idx) => ({
        ...itm,
        backgroundColor: backgroundColors[idx],
    }));
    return { datasets, labels };
};

const sdkDataSetBuilder = sdkMSRDataset => {
    let datasetLen = sdkMSRDataset.length;
    let backgroundColor = palette('tol', datasetLen).map(hex => `#${hex}`);
    let data = [...new Array(datasetLen)];
    let labels = [...new Array(datasetLen)];
    for (let idx = 0; idx < datasetLen; idx++) {
        data[idx] = sdkMSRDataset[idx].value;
        labels[idx] = sdkMSRDataset[idx].title;
        sdkMSRDataset[idx] = {
            ...sdkMSRDataset[idx],
            color: backgroundColor[idx],
        };
    }
    return {
        dataSet: sdkMSRDataset,
        pieChartData: {
            datasets: [
                {
                    data,
                    backgroundColor,
                },
            ],
            labels,
        },
    };
};

export default dashboardReducer;
