import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const NeedToLogin = () => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center" direction="column">
      <Grid item>
        <Typography sx={{ mt: 10, mb: 2 }}>YOU HAVE TO LOGIN</Typography>
      </Grid>
      <Button href="http://localhost:8080/login" variant="contained">
        Login
      </Button>
    </Grid>
  );
};
