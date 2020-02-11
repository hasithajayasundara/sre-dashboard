import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Graph from 'react-graph-vis';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0,
    },
    inner: {
        minWidth: 1050,
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
    actions: {
        justifyContent: 'flex-end',
    },
}));

const SLOGraph = props => {
    const { className, users, ...rest } = props;

    const classes = useStyles();

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = event => {
        const { users } = props;

        let selectedUsers;

        if (event.target.checked) {
            selectedUsers = users.map(user => user.id);
        } else {
            selectedUsers = [];
        }

        setSelectedUsers(selectedUsers);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedUsers.indexOf(id);
        let newSelectedUsers = [];

        if (selectedIndex === -1) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
        } else if (selectedIndex === 0) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
        } else if (selectedIndex === selectedUsers.length - 1) {
            newSelectedUsers = newSelectedUsers.concat(
                selectedUsers.slice(0, -1)
            );
        } else if (selectedIndex > 0) {
            newSelectedUsers = newSelectedUsers.concat(
                selectedUsers.slice(0, selectedIndex),
                selectedUsers.slice(selectedIndex + 1)
            );
        }

        setSelectedUsers(newSelectedUsers);
    };

    const handlePageChange = (event, page) => {
        setPage(page);
    };

    const handleRowsPerPageChange = event => {
        setRowsPerPage(event.target.value);
    };

    const graph = {
        nodes: [
            {
                id: 1,
                label: 'CDF\nUptime\nUsage: 99%',
                color: '#000000',
                shape: 'hexagon',
            },
            { id: 2, label: 'Files\nUptime\nUsage: 99%', color: '#e09c41' },
            { id: 3, label: 'Assets\nUptime\nUsage: 99%', color: '#e0df41' },
            { id: 4, label: 'Events\nUptime\nUsage: 99%', color: '#7be041' },
            {
                id: 5,
                label: 'Timeseries\nUptime\nUsage: 99%',
                color: '#41e0c9',
            },
            {
                id: 6,
                label: 'CDF\nError\nUsage: 99%',
                color: '#000000',
                shape: 'hexagon',
            },
            { id: 7, label: 'Files\nError\nUsage: 99%', color: '#e09c41' },
            { id: 8, label: 'Assets\nError\nUsage: 99%', color: '#e0df41' },
            { id: 9, label: 'Events\nError\nUsage: 99%', color: '#7be041' },
            {
                id: 10,
                label: 'Timeseries\nError\nUsage: 99%',
                color: '#41e0c9',
            },
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 1, to: 4 },
            { from: 1, to: 5 },
            { from: 6, to: 7 },
            { from: 6, to: 8 },
            { from: 6, to: 9 },
            { from: 6, to: 10 },
        ],
    };

    const options = {
        layout: {
            hierarchical: true,
        },
        edges: {
            color: '#000000',
        },
        nodes: {
            shape: 'circle',
        },
        height: 600,
        interaction: {
            zoomView: false,
        },
    };

    const events = {
        select: function(event) {
            var { nodes, edges } = event;
            console.log('Selected nodes:');
            console.log(nodes);
            console.log('Selected edges:');
            console.log(edges);
        },
    };

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
                <Graph graph={graph} options={options} events={events} />
            </CardContent>
        </Card>
    );
};

// SLOGraph.propTypes = {
//   className: PropTypes.string,
//   users: PropTypes.array.isRequired
// };

export default SLOGraph;
