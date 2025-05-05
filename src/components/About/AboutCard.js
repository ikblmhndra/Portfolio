import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ikbal Mahendra </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I am currently employed as a Infrastructure Security, Lead at Privy.
            <br />
            I have completed my bachelor's degree in informatics engineering at 
            Mercu Buana University.
            <br />
            <br />
            Apart from work, there are a few other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Ridding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ikbal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
