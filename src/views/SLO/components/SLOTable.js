import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TablePagination,
} from '@material-ui/core';

import { getInitials } from 'helpers';

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

const SLOTable = props => {
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

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Service</TableCell>
                                    <TableCell>Latency Value</TableCell>
                                    <TableCell>Latency SLO</TableCell>
                                    <TableCell>Error Rate</TableCell>
                                    <TableCell>Error SLO</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.slice(0, rowsPerPage).map(user => (
                                    <TableRow
                                        className={classes.tableRow}
                                        hover
                                        key={user.id}
                                        selected={
                                            selectedUsers.indexOf(user.id) !==
                                            -1
                                        }
                                    >
                                        <TableCell>
                                            <div
                                                className={
                                                    classes.nameContainer
                                                }
                                            >
                                                <Avatar
                                                    className={classes.avatar}
                                                    src="/images/icons/globe.jpg"
                                                >
                                                    {getInitials(user.name)}
                                                </Avatar>
                                                <Typography variant="body1">
                                                    {user.name}
                                                </Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {user.latencyValue}
                                        </TableCell>
                                        <TableCell>{user.latencySLO}</TableCell>
                                        <TableCell>{user.errorValue}</TableCell>
                                        <TableCell>{user.errorSLO}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
                <TablePagination
                    component="div"
                    count={users.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </CardActions>
        </Card>
    );
};

SLOTable.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired,
};

export default SLOTable;
