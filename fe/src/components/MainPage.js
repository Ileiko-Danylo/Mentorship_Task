import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Box } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
  },
  {
    field: 'namespace_kind',
    headerName: 'Namespace Kind',
    width: 150,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    type: 'date',
    width: 170,
    valueFormatter: (params) => moment(params?.value).format('DD/MM/YYYY hh:mm A'),
  },
  {
    field: 'name_with_namespace',
    headerName: 'Name with Namespace',
    width: 250,
  },
];

export const MainPage = (props) => {
  const [repos, setRepos] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    axios(`http://localhost:3000/projects/allProjects`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleClick = useCallback((params) => {
    window.open(`/projectCommits/${params.id}`, '_blank');
  }, []);

  const rows = repos ? (
    repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      namespace_kind: repo.namespace.kind,
      created_at: repo.created_at,
      name_with_namespace: repo.name_with_namespace,
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
    return <div>Loading data</div>;
  }
};
