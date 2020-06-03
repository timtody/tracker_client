import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TicketTable from "./TicketTable";
import Timeline from "./Timeline";
import _ from "lodash";

export default () => {
  return (
    <div>
      <Grid container direction="row" spacing={3}>
        <Grid container item xs={6} spacing={3} direction="column">
          <Grid item>
            <TicketTable
              keys={["summary", "target_resolution_date"]}
              title="Assigned to me"
              filter={(tickets) => {
                return tickets;
              }}
            />
          </Grid>
          <Grid item>
            <TicketTable
              keys={["summary", "target_resolution_date"]}
              title="Unassigned"
              filter={(tickets) => {
                return _.filter(tickets, (o) => {
                  return o.assignee !== 1;
                });
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <Timeline title="Timeline">
              {[
                { title: "Bruh", prop: "Brahh" },
                { title: "Breh", prop: "Brahh" },
                { title: "Brah", prop: "Brahh" },
                { title: "Bruh", prop: "Brahh" },
                { title: "Breh", prop: "Brahh" },
                { title: "Brah", prop: "Brahh" },
                { title: "Bruh", prop: "Brahh" },
                { title: "Breh", prop: "Brahh" },
                { title: "Brah", prop: "Brahh" },
                { title: "Bruh", prop: "Brahh" },
                { title: "Breh", prop: "Brahh" },
                { title: "Brah", prop: "Brahh" },
              ]}
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
