import { AppBarText } from './components/AppBarText';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

function App() {
  return (
    <Container>
      <AppBar>
        <AppBarText />
      </AppBar>
    </Container>
  );
}

export default App;
