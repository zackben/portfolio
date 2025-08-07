import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BENADDI Zakaria </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />
            I am tech enthusiast who discovered a real passion for web
            development. <br />
            I love exploring how things work on the web and turning ideas into
            interactive, user-friendly experiences. <br />
            I enjoy building interfaces that are not only functional but also
            enjoyable to use.
            <br />
            <br />
            Beyond coding, I’m also into:
          </p>
          <ul>
            <li className="about-activity">🎮 Playing video games</li>
            <li className="about-activity">🧠 Learning new technologies</li>
            <li className="about-activity">
              🌍 Traveling and discovering new perspectives
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
