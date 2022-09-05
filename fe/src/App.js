import { AppBarText } from './components/AppBarText(unnecessary)';
import Layout from './components/Layout';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div />} />
            <Route path="/about" element={<AppBarText />} />
            <Route path="/feature1" element={<div />} />
            <Route path="/feature2" element={<div />} />
            <Route path="/feature3" element={<div />} />
            <Route path="/home" element={<div />} />
            <Route path="/logout" element={<div />} />
            <Route path="/profile" element={<div />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
