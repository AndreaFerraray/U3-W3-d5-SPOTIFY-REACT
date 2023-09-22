import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./component/Sidebar";
import HomePage from "./component/Homepage";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Container fluid className="p-0 m-0">
          <Row>
            <Col xs={2}>
              <SideBar />
            </Col>
            <Col xs={10}>
              <HomePage />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
