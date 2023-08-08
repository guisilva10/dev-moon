import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Loja Virtual",
      description: "React | Typescript",
      imgUrl: projImg1,
    },
    {
      title: "Sistema Financeiro",
      description: "React.js",
      imgUrl: projImg2,
    },
    {
      title: "Buscador de CEP",
      description: "React.js",
      imgUrl: projImg3,
    },
    {
      title: "Enviar Email",
      description: "React.js | Email service",
      imgUrl: projImg4,
    },
    {
      title: "Quiz",
      description: "React.js | SASS",
      imgUrl: projImg5,
    },
    {
      title: "Portfólio",
      description: "React.js",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Veja alguns dos meus principais projetos.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Por enquanto é só, volte outra vez pois novos projetos serão relacionados aqui.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Por enquanto é só, volte outra vez pois novos projetos serão relacionados aqui.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
