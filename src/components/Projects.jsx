import "./Projects.css";
import { ProjectPreview } from "./ProjectPreview";
import { Container } from "react-bootstrap";
import { myProjects } from "../projects/myProjects";

export function Projects() {
  return (
    <section className="projects" id="projects-list">
      <Container className="projects-container">
        <div className="projects-headline">
          <h5>PORTFOLIO</h5>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        {myProjects.map((project) => (
          <li key={project.id}>
            <ProjectPreview project={project} />
          </li>
        ))}
      </Container>
    </section>
  );
}
