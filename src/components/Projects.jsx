import "./Projects.css";
import { ProjectPreview } from "./ProjectPreview";
import { Container } from "react-bootstrap";
/*Make an object with the data and map the data*/

export function Projects() {

  return (
    <div className="projects" id="projects-list">
      <Container className="projects-container">
        <div className="projects-headline">
          <h5>PORTFOLIO</h5>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        <ProjectPreview
          projectImage={
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
          }
          projectName={"CAR RENTAL"}
          projectDate={"February 2023"}
          projectDetails={
            "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
          }
          jsFramework={"React"}
          cssFramework={"Bootstrap"}
        />
        <ProjectPreview
          reversed
          projectImage={
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
          }
          projectName={"COINDOM"}
          projectDate={"March 2023"}
          projectDetails={
            "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
          }
          jsFramework={"React"}
          cssFramework={"Bootstrap"}
        />
        <ProjectPreview
          projectImage={
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
          }
          projectName={"GYMATE"}
          projectDate={"April 2023"}
          projectDetails={
            "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
          }
          jsFramework={"React"}
          cssFramework={"Bootstrap"}
        />
        <ProjectPreview
          reversed
          projectImage={
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
          }
          projectName={"ECOMMERCE"}
          projectDate={"June 2023"}
          projectDetails={
            "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
          }
          jsFramework={"React"}
          cssFramework={"Bootstrap"}
        />
      </Container>
    </div>
  );
}
