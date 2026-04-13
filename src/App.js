import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import Bai2 from "./components/bai2"
import Movie from "./components/movie";
import Book from "./components/book";
import Counter from "./components/conter";
import Box from "./components/box";
import Hello from "./components/hello";
import { items } from "./components/data";
import Avatar from "./components/avatar";

const App = () =>{
  return(
    <Container>
      <Row>
        <Col>
        <Counter />
        <Box mau='blue' rong='100px' cao='100px'/>
        <Box mau='red' rong='100px' cao='100px'/>
        </Col>
        <Col>
        <Hello who='AN' age='21' ques='co khoe khong ?'/>
        <Hello who='Long'/>
        <Hello ques='ban ten gi?'/>
        </Col>
      </Row>
      <hr/>
      {
        items.map((a,key)=>(
          <Avatar 
          key={key}
          name={a.name}
          gender={a.gender}
          img={a.image}
          />
        ))
      }
    <hr/>
    <Book/>
    </Container>
  );
}

export default App;
