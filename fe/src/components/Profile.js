import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import Typography from '@mui/material/Typography';

export const Profile = () => {
  let user;
  if (Cookies.get('user')) {
    user = JSON.parse(Cookies.get('user'));
  } else
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

  if (user) {
    return (
      <Grid container spacing={5}>
        <Grid item>
          <Box
            component="img"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: 150,
              width: 150,
              m: 2,
            }}
            alt="User avatar"
            src={user.avatar_url}
          />
        </Grid>
        <Grid item>
          <p>
            <b>Username</b>: {user.username}
          </p>
          <p>
            <b>Name</b>: {user.name}
          </p>
          <p>
            <b>Commit Email</b>: {user.commit_email}
          </p>

          <p>
            <b>Followers</b>: {user.followers}
          </p>
          <p>
            <b>Followed</b>: {user.following}
          </p>
        </Grid>
      </Grid>
    );
  }
  return;
};
