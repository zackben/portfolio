import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/tt.png";
import Home2 from "./Home2";
import Type from "./Type";
import { useRef } from "react";

function Home({ darkMode }) {
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <Container
        fluid
        className={`home-section${darkMode ? " dark-mode" : " light-mode"}`}
        id="home"
      >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👨🏾‍💻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BENADDI ZAKARIA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <span
        onClick={handleScroll}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
          bottom: "180px",
          padding: "12px 24px",
          background: "linear-gradient(90deg,#39d28dff 40%,#6a11cb 100%)",
          color: "#fff",
          fontWeight: "600",
          fontSize: "16px",
          borderRadius: "50px",
          boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          userSelect: "none",
          animation: "bounce 2s infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)";
        }}
      >
        Scroll Down
      </span>
      <style>
        {`
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }
    `}
      </style>
      <Home2 ref={targetRef} darkMode={darkMode} />{" "}
    </section>
  );
}

export default Home;
