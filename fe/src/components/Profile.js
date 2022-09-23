import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { isUserExist } from '../middleware/isUserExist';
import { NeedToLogin } from './NeedToLogin';

export const Profile = () => {
  const user = isUserExist();

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
  } else {
    return <NeedToLogin />;
  }
};
