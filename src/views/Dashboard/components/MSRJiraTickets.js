import React, { useEffect } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  LinearProgress
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { connect } from "react-redux";

import { StatusBullet } from "components";
import {
  fetchJiraTickets,
  changeJiraTicketFilter
} from "../../../actions/dashboard";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: "flex",
    alignItems: "center"
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const statusColors = {
  Done: "success",
  Ready: "info",
  "In Progress": "info",
  "Waiting Cust": "danger"
};

const MSRJiraTickets = ({
  tickets,
  filter,
  total,
  fetching,
  error,
  fetchJiraTickets,
  changeJiraTicketFilter
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchJiraTickets(filter);
  }, [fetchJiraTickets, filter]);

  let { skip, limit, createdDate, status } = filter;

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader title="MSR Jira Tickets" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            {fetching ? (
              <LinearProgress></LinearProgress>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ticket ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel active direction="desc">
                          Created Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tickets.map(ticket => (
                    <TableRow hover key={ticket.id}>
                      <TableCell>{ticket.ref}</TableCell>
                      <TableCell>{ticket.customer.name}</TableCell>
                      <TableCell>
                        {moment(ticket.createdAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[ticket.status]}
                            size="sm"
                          />
                          {ticket.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
          onClick={() =>
            skip * limit < total
              ? changeJiraTicketFilter({ skip: skip + 1 })
              : ""
          }
        >
          Next <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

MSRJiraTickets.propTypes = {
  className: PropTypes.string
};

function mapStateToProps({ dashboard }) {
  let { jira } = dashboard;
  return {
    tickets: jira.tickets,
    total: jira.total,
    filter: jira.filter,
    fetching: jira.fetching,
    error: jira.error
  };
}

export default connect(
  mapStateToProps,
  { fetchJiraTickets, changeJiraTicketFilter }
)(MSRJiraTickets);
