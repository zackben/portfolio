import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ocp from "../../Assets/Projects/ocp.png";
import bp from "../../Assets/Projects/bp.jpg";
import saham from "../../Assets/Projects/sanlam.png";
import eq from "../../Assets/Projects/eq.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Highlighted </strong>Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <p style={{ color: "white" }}>
          <strong style={{ color: "yellow" }}>Note:</strong> These are internal
          projects built for private infrastructure, so full codebases and live
          demos are not publicly accessible.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bp}
              isBlog={false}
              title="jedeviensclient"
              description="A journey allows new clients to open a bank account entirely online through the Pocket Bank app."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bp}
              isBlog={false}
              title="Ebanking(Cash Management)"
              description="Development of a web-based eBanking interface for cash management, enabling financial transactions such as single and multiple transfers, account-to-account transfers, and operations for both individuals and businesses. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bp}
              isBlog={false}
              title="Fulldigital"
              description="A fully online onboarding journey designed for both local individuals and MDMs (Moroccans living abroad). It starts on the PocketBank mobile application, then the requests are routed to the back office where they are processed."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocp}
              isBlog={false}
              title="OCP Medical Coverage Application "
              description="application dedicated to OCP group employees for managing their medical coverage provided by Saham."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saham}
              isBlog={false}
              title="Sanlam Mobile App"
              description="Worked on the Saham mobile application to integrate new user journeys related to insurance services.Ensured a smooth and consistent user experience across both iOS and Android platforms."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eq}
              isBlog={false}
              title="Espace connecté EQDOM"
              description="application that improves the credit processing time of files through an automated and industrialized workflow, while providing the client with their score in real time "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
