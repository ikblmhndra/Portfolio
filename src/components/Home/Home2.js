import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
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
            I fell in love with security and infrastructure engineering — and never looked back. 🛡️⚙️
            <br />
            <br />
            I currently work as an
            <i>
              <b className="purple"> Infrastructure Security Lead at Privy</b>
            </i>
            , where I design and build secure, automated, and scalable infrastructure across hybrid cloud environments.
            <br />
            <br />
            I'm deeply passionate about
            <i>
              <b className="purple"> network security</b>
            </i>
            ,&nbsp;
            <i>
              <b className="purple"> Linux hardening</b>
            </i>
            , and integrating security into the automation pipeline — from bare-metal to Kubernetes.
            <br />
            <br />
            I also enjoy getting my hands dirty with
            <i>
              <b className="purple"> red teaming activities</b>
            </i>
            , such as conducting
            <i>
              <b className="purple"> vulnerability assessments</b>
            </i>
            , performing
            <i>
              <b className="purple"> penetration testing</b>
            </i>
            , and exploring real-world attack simulations to improve overall defense posture.
            <br />
            <br />
            Whenever possible, I also apply my love for scripting and building smart tools using
            <i>
              <b className="purple"> Python</b>
            </i>
            ,&nbsp;
            <i>
              <b className="purple"> Bash</b>
            </i>
            , and even automation on macOS.
            <br />
            <br />
            Security should be&nbsp;
            <i>
              <b className="purple">invisible, intelligent, and resilient</b>
            </i>
            . That's what I aim for every day.
          </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/ikblmhndra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ikbal.mahendra.96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ikblmhndra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ikblmhndra_"
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
