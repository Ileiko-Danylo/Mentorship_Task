import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import { Box } from '@material-ui/core';

export const Login = () => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center" direction="column">
      <Grid item>
        <Box
          component="img"
          sx={{
            height: 350,
            width: 350,
            maxHeight: { xs: 350, md: 250 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="GitLab Logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
        />
      </Grid>
      <Button href="http://localhost:3000/gitlab" variant="contained">
        Login
      </Button>
    </Grid>
  );
};
