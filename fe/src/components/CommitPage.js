import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import moment from 'moment';

export const CommitPage = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios(`http://localhost:3000/projects/${props.projectId}/commits/${props.commitId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  if (data && data.id) {
    return (
      <Grid container spacing={5}>
        <Grid item>
          <p>
            <b>id</b>: {data.id}
          </p>
          <p>
            <b>Short Id</b>: {data.short_id}
          </p>
          <p>
            <b>Title</b>: {data.title}
          </p>
          <p>
            <b>Message</b>: {data.message}
          </p>
          <p>
            <b>Author Name</b>: {data.author_name}
          </p>
          <p>
            <b>Author Email</b>: {data.author_email}
          </p>
          <p>
            <b>Committer Name</b>: {data.committer_name}
          </p>
          <p>
            <b>Committer Email</b>: {data.committer_email}
          </p>
          <p>
            <b>Committed Date</b>: {moment(data.committed_date).format('DD/MM/YYYY hh:mm A')}
          </p>
          <p>
            <b>Additions</b>: {data.stats.additions}
          </p>
          <p>
            <b>Deletions</b>: {data.stats.deletions}
          </p>
          <p>
            <b>Total</b>: {data.stats.total}
          </p>
          <p>
            <b>Status</b>: {data.status ? data.status : 'null'}
          </p>
        </Grid>
      </Grid>
    );
  } else {
    return <p>Loading data...</p>;
  }
};
