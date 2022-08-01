import './App.css';

import Myheader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  const number = 5;

  return (
    <Container>
    <div className="App">
      <Counter/>
      <Myheader />
      <MyFooter /> 
    </div>
    </Container>
  );
}

export default App;
