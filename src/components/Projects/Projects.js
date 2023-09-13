import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mylaminin from "../../Assets/Projects/Mylaminin.png";
import optery from "../../Assets/Projects/optery.png";
import demo from "../../Assets/Projects/demo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={optery}
                isBlog={false}
                title="Optery"
                description="Optery’s handling of the core data removal task outshines the rest, and its free tier brings
                privacy protection to those who can’t afford expensive subscriptions. In the realm of personal data
                removal, Optery is our Editors’ Choice."
                ghLink="https://www.optery.com/"
                demoLink="https://www.optery.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mylaminin}
              isBlog={false}
              title="My Laminin"
              description="My Laminin is bringing a new blockchain-enabled document sharing and verification service
              to market. These are putting people in complete control of their credentials and respecting their personal data privacy. And that will increase government and private sector operational efficiencies by reducing fraud and traditional audit control requirements."
              ghLink="https://www.mylaminin.net/"
              demoLink="https://www.mylaminin.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demo}
              isBlog={false}
              title="APT"
              description="APT's user-friendly interface simplifies the process of creating and managing invoices, streamlining financial transactions. It also offers advanced security measures to safeguard sensitive supplier and customer information, ensuring data integrity and confidentiality."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demo}
              isBlog={false}
              title="LUCI"
              description="Using the spending data that you share with luci, luci's patent pending technology calculates what
              your rewards would have been if you had spent your money using different credit cards. luci calculates
              your reward potential for all the credit cards that are in luci's database, and provides you with a
              personalized recommendation on cards that could give you the most reward for your spending habit"
              ghLink="/"
              demoLink="/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
