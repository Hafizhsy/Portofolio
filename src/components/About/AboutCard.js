import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nur Hafizh Pratama Suyudi </span>
            from <span className="purple"> Manado, Sulawesi Utara.</span>
            <br />
            I'm currently a 7th-semester Informatics Engineering student 
            <br />
            at Ahmad Dahlan University, Yogyakarta.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every difficulty has a way out, believe in yourself!"{" "}
          </p>
          <footer className="blockquote-footer">Hafizh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
