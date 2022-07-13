import Card from "./layout/Card";
import Title from "./layout/Title";
import { Container, GlobalStyle } from "./style";

function App() {
  const animal = [
    {
      name: "Lobo",
      img: "http://liferayee.mt.gov.br/documents/2349849/10222582/def69643889ee29e232637646e839064.jpg",
      price: 1500
    },
    {
      name: "Aguia",
      img: "https://static.dicionariodesimbolos.com.br/upload/c9/f0/aguia-3_xl.jpeg",
      price: 450
    },
  ];

  return (
    <Container>
      <GlobalStyle/>
      <Title title={"Animal pictures"} />
      <Card animais={animal} />
    </Container>      
    
  );
}

export default App;
