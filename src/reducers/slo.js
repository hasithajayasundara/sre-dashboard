import {
    SET_SLO_SERVICE_TYPE,
    SET_SLO_TIME_RANGE,
    SET_SLO_TIME_FORMAT,
    SET_SLO_TYPE,
    FETCH_SLO_FILTERS_SUCCESS,
    FETCH_SLO_FILTERS_FAILED,
    SET_SLO_TIME,
    SET_SLO_RELATIVE_TIME,
    FETCH_SLO_GRAPH_DATA,
    FETCH_SLO_GRAPH_DATA_SUCCESS,
    FETCH_SLO_GRAPH_DATA_FAILED,
} from '../actions/types';
import moment from 'moment';

const currentDate = new Date();

const relativeTimeOptions = [
    { value: 5, name: 'Last 5 minutes', selected: true },
    { value: 15, name: 'Last 15 minutes', selected: false },
    { value: 30, name: 'Last 30 minutes', selected: false },
    { value: 60, name: 'Last 1 hour', selected: false },
    { value: 360, name: 'Last 6 hours', selected: false },
    { value: 720, name: 'Last 12 hours', selected: false },
    { value: 1440, name: 'Last 1 day', selected: false },
    { value: 10880, name: 'Last 1 week ', selected: false },
    { value: 40320, name: 'Last 1 month', selected: false },
    { value: 120960, name: 'Last 3 months', selected: false },
    { value: 241920, name: 'Last 6 months', selected: false },
    { value: 483840, name: 'Last 1 year', selected: false },
];

const initialState = {
    sloGraph: {
        filter: {
            type: '',
            services: [],
            timeRange: {
                from: moment(currentDate).valueOf(),
                to: moment(currentDate).valueOf(),
            },
        },
        fetching: true,
        error: null,
        dataPoints: [],
    },
    filters: {
        fetching: true,
        error: null,
        sloTypes: [],
        sloServices: [],
        timeRange: {
            relativeTimeSelected: false,
            relativeTimeOptions,
            relativeTimeValue: 5,
            from: currentDate,
            to: currentDate,
        },
    },
};

const sloReducer = (state = initialState, action) => {
    let sloTypes = [];
    let sloTypeId = '';
    let sloServiceIndex = '';
    switch (action.type) {
        case FETCH_SLO_FILTERS_SUCCESS:
            sloTypes = action.payload.sloTypes.map(itm => ({
                ...itm,
                checked: false,
                services: itm.services.map(service => ({
                    ...service,
                    checked: false,
                })),
            }));
            return {
                ...state,
                filters: {
                    ...state.filters,
                    fetching: false,
                    error: null,
                    sloTypes: [...sloTypes],
                },
            };
        case FETCH_SLO_FILTERS_FAILED:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    fetching: false,
                    error: 'An error occured while fetching data',
                },
            };
        case SET_SLO_TYPE:
            sloTypeId = action.payload.id;
            sloTypes = [...state.filters.sloTypes].map(itm => {
                let itmCopy = { ...itm };
                if (itm.id === sloTypeId) itmCopy.checked = !itm.checked;
                else itmCopy.checked = false;
                return itmCopy;
            });
            return {
                ...state,
                sloGraph: {
                    ...state.sloGraph,
                    filter: {
                        ...state.sloGraph.filter,
                        type: sloTypeId,
                        services: [
                            ...sloTypes[action.payload.index].services.map(
                                service => service.id
                            ),
                        ],
                    },
                },
                filters: {
                    ...state.filters,
                    sloTypes: [...sloTypes],
                    sloServices: [
                        ...sloTypes[action.payload.index].services.map(
                            service => ({
                                ...service,
                                checked: true,
                            })
                        ),
                    ],
                },
            };
        case SET_SLO_SERVICE_TYPE:
            sloServiceIndex = action.payload.index;
            let currentServices = [...state.filters.sloServices];
            let currentService = currentServices[sloServiceIndex];
            currentServices[sloServiceIndex] = {
                ...currentService,
                checked: !currentService.checked,
            };
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sloServices: currentServices,
                },
                sloGraph: {
                    ...state.sloGraph,
                    filter: {
                        ...state.sloGraph.filter,
                        services: [
                            ...currentServices
                                .filter(service => service.checked)
                                .map(itm => itm.id),
                        ],
                    },
                },
            };
        case SET_SLO_TIME:
            let { attr, date } = action.payload;
            if (attr === 'from') {
                return {
                    ...state,
                    sloGraph: {
                        ...state.sloGraph,
                        timeRange: {
                            ...state.sloGraph.timeRange,
                            from: moment(date).valueOf(),
                        },
                    },
                    filters: {
                        ...state.filters,
                        timeRange: { ...state.filters.timeRange, from: date },
                    },
                };
            }
            return {
                ...state,
                sloGraph: {
                    ...state.sloGraph,
                    timeRange: {
                        ...state.sloGraph.timeRange,
                        to: moment(date).valueOf(),
                    },
                },
                filters: {
                    ...state.filters,
                    timeRange: { ...state.filters.timeRange, to: date },
                },
            };
        case SET_SLO_TIME_FORMAT:
            let isRelativeTimeSelected =
                state.filters.timeRange.relativeTimeSelected;
            let to = 0;
            let from = 0;
            let currentEpochTime = moment(new Date());
            if (isRelativeTimeSelected) {
                from = currentEpochTime.valueOf();
            } else {
                from = currentEpochTime.subtract({ minute: 5 }).valueOf();
            }
            to = currentEpochTime.valueOf();
            return {
                ...state,
                filters: {
                    ...state.filters,
                    timeRange: {
                        ...state.filters.timeRange,
                        relativeTimeValue: 5,
                        to,
                        from,
                        relativeTimeSelected: !isRelativeTimeSelected,
                    },
                },
            };
        case SET_SLO_RELATIVE_TIME:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    timeRange: {
                        ...state.filters.timeRange,
                        relativeTimeValue: action.payload,
                    },
                },
            };
        case FETCH_SLO_GRAPH_DATA:
            return {
                ...state,
                sloGraph: { ...state.sloGraph, fetching: true },
            };
        case FETCH_SLO_GRAPH_DATA_SUCCESS:
            return {
                ...state,
                sloGraph: { ...state.sloGraph, fetching: false, error: null },
            };
        case FETCH_SLO_GRAPH_DATA_FAILED:
            return {
                ...state,
                sloGraph: {
                    ...state.sloGraph,
                    error: 'An error occured',
                    fetching: false,
                },
            };
        default:
            return state;
    }
};

export default sloReducer;
