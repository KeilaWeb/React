import './App.css';
import { Card } from './components/Card';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`

function App() {
  return (
    <Container >
      <Card title="Teste 1"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
      <Card title="Teste 2"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
      <Card title="Teste 3"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, sem sit amet euismod aliquam, lectus elit porttitor lorem, vel ullamcorper sapien sem vitae felis. In eleifend hendrerit gravida. Vestibulum tempor nibh in auctor pellentesque. Mauris venenatis sapien ut neque aliquet venenatis. Nam ut odio est."/>
    </Container >
  );
}

export default App;
