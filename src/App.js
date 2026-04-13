import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/header";
import Bai2 from "./components/bai2";
import Movie from "./components/movie";
import Book from "./components/book";
import Counter from "./components/conter";
import Box from "./components/box";
import Hello from "./components/hello";
import { items } from "./components/data";
import Avatar from "./components/avatar";
import ViDu2 from "./components/vidu2";
import ViDu3 from "./components/vidu3";
import ViDu1 from "./components/vd1";
import Menu from "./components/menu";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
    <Container>
      <Menu/>
      <Routes>
        <Route path='Vidu2' element={<ViDu2/>}/>
        <Route path='Vidu3' element={<ViDu3/>}/>
        <Route path='book' element={<Book/>}/>
      </Routes>
      
    <Footer/>
    </Container>
    </BrowserRouter>
  );
}

export default App;
