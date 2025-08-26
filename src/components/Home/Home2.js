import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { forwardRef } from "react";

const Home2 = forwardRef((props, ref) => {
  return (
    <Container ref={ref} fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into web development started with a curiosity for how
              things work behind the screen — and it quickly turned into a real
              passion.
              <br />
              <br />I focus mainly on{" "}
              <i>
                <b className="purple"> front-end development</b>
              </i>{" "}
              using
              <i>
                <b className="purple"> React.js, </b>
              </i>
              with hands-on experience in{" "}
              <i>
                <b className="purple"> Node.js </b>
              </i>
              when needed.
              <br />
              <br />
              I enjoy creating smooth, user-friendly interfaces and improving
              the overall user experience through clean and maintainable code.
              <br />
              <br />
              I’m constantly learning and improving, driven by the desire to
              build things that people actually love to use.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ borderRadius: "50%" }}
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
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
                  href="https://github.com/zackben/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/zackbenaddi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ma.linkedin.com/in/zakaria-benaddi-820b22167"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zack_benaddi/"
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
});

export default Home2;
