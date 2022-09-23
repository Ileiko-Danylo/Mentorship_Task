import React, { useState } from 'react';
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
  const [projectId, setProjectId] = useState('');
  const [commitId, setCommitId] = useState('');

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
              path="/commitPage"
              element={<CommitPage projectId={projectId} commitId={commitId} />}
            />
            <Route
              path="/mainPage"
              element={<MainPage projectId={projectId} onProjectIdChange={setProjectId} />}
            />
            <Route
              path="/projectCommits"
              element={
                <ProjectCommits
                  projectId={projectId}
                  commitId={commitId}
                  onCommitIdChange={setCommitId}
                />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
