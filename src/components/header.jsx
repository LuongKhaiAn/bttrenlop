import { Navbar, Nav,Form, Button, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="Home">
          <img src={logo} height={50} width={50}></img>
        </Navbar.Brand>
        <Nav className="flex-row">
          <Link to="/vd1">vi du 1</Link>
          <Link to="/vidu2">vi du 2</Link>
          <Link to="/vidu3">vi du 3</Link>
        </Nav>
        <Form className="inline">
          <Row>
            <Col>
              <Form.Control
                type="search"
                placeholder="ten va gia"
                id="txtSearch"
                name="txtSearch"
                style={{width:200}}
              />
            </Col>
            <Col>
              <Button variant="online-success">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
