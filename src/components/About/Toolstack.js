import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaUbuntu } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
   SiWebstorm,
    SiAtlassian
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaUbuntu />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAtlassian />
        </Col>
    </Row>
  );
}

export default Toolstack;
