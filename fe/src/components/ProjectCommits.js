import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Box } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 160 },
  {
    field: 'title',
    headerName: 'Title',
    width: 120,
  },
  {
    field: 'message',
    headerName: 'Message',
    width: 150,
  },
  {
    field: 'author_name',
    headerName: 'Author Name',
    width: 250,
  },
  {
    field: 'author_email',
    headerName: 'Author Email',
    width: 300,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    type: 'date',
    width: 170,
    valueFormatter: (params) => moment(params?.value).format('DD/MM/YYYY hh:mm A'),
  },
];

export const ProjectCommits = (props) => {
  const [commits, setCommits] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3000/projects/${props.projectId}/commits`)
      .then((response) => {
        setCommits(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleClick = useCallback(
    (params) => {
      props.onCommitIdChange(params.id);
      navigate('/commitPage');
    },
    [props.onCommitIdChange]
  );

  const rows = commits ? (
    commits.map((commit) => ({
      id: commit.id,
      title: commit.title,
      message: commit.message,
      author_name: commit.author_name,
      author_email: commit.author_email,
      created_at: commit.created_at,
    }))
  ) : (
    <p>Loading data...</p>
  );

  if (rows && rows.length > 0) {
    return (
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          onCellClick={handleClick}
        />
      </Box>
    );
  } else {
    return <div>No data</div>;
  }
};
