import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Ridham Pansuriya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am software developer with 3.5+ years of experience in this industry.
            <br />
            Additionally, I am currently employed as a fullstack developer at
            <span className="purple">  Bvm Infotech. 
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{padding: '0'}}>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning History
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares."
          </p>
          <footer className="blockquote-footer">Robert C. Martin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
