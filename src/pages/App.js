import gitLogo from '../assets/github-black.png';
import {Container} from './styles';

function App() {
  return (
    <Container>
        <img src={gitLogo} width={72} height={72}/>
    </Container>
  );
}

export default App;
