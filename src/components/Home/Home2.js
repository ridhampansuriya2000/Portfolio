import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
              I am a proficient software developer with more than 3.5 years of industry experience. My expertise spans a wide range of technologies, encompassing both front-end and back-end development. I excel in collaborative team environments and have successfully managed remote developer teams. Furthermore, I have a strong track record of delivering projects from inception to completion independently.
              <br />
              <br />Worked on many custom modules and widgets using
              <i>
                <b className="purple">  React JS/CSS/HTML </b>
                and made those crossbrowsers consistent.
              </i>
              <br />
              <br />
              Utilised &nbsp;
              <i>
                <b className="purple">Node.js, Socket.io, Redis and Angular </b>
                for scalable website architecture and realtime technology.
              </i>
              <br />
              <br />
              Highly adaptable in quickly changing
              <i>
                <b className="purple">
                  {" "}
                  technical environments with very strong organizational and
                  analytical skills.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius: '50%'}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ridhampansuriya2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/ridham-pansuriya-0b95251b5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/ridham-pansuriya-0b95251b5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ridhampansuriya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
