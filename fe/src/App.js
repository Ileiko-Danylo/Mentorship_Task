import React from 'react';
import Layout from './components/Layout';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { MainPage } from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import { isUserExist } from './middleware/isUserExist';
import { NeedToLogin } from './components/NeedToLogin';
import { ProjectCommits } from './components/ProjectCommits';
import { CommitPage } from './components/CommitPage';

function App() {
  const user = isUserExist();

  return (
    <Container>
      <Router>
        <Routes>
          <Route element={!user ? <NeedToLogin /> : <Layout />}>
            <Route path="/" element={<div>There is nothing here, just move to another tab</div>} />
            <Route
              path="/about"
              element={<div>Whooops, looks like I was too lazy to create this page 😀</div>}
            />
            <Route path="/logout" element={<div />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/projectCommits/:projectId/commitPage/:commitId"
              element={<CommitPage />}
            />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/projectCommits/:projectId" element={<ProjectCommits />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
