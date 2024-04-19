import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyComponent: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
            Coluna 1
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            Coluna 2
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
