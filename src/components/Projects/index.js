import React from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io5";

import TitleSection from "../TitleSection";

import { projects } from "./content";

const Projects = () => {
  return (
    <ProjectsBox id="projetos">
      <Container>
        <WrapperProjects>
          <TitleSection text="Meus projetos" />
          <ContentProjectList>
            <ul>
              {projects.map((item, i) => (
                <li key={i}>
                  <CardProject>
                    <CardProjectInfo>
                      <header>
                        <h3>{item.name}</h3>
                      </header>
                      <main>
                        <p>{item.description}</p>
                      </main>
                      <footer>
                        <a href={item.link} target="_blanck">
                          <button>live demo</button>
                        </a>
                        <a href={item.github} target="_blanck">
                          <button>
                            <IoLogoGithub />
                          </button>
                        </a>
                      </footer>
                    </CardProjectInfo>
                    <CardProjectImage>
                      <img src={item.image} alt={item.name} />
                    </CardProjectImage>
                  </CardProject>
                </li>
              ))}
            </ul>
          </ContentProjectList>
        </WrapperProjects>
      </Container>
    </ProjectsBox>
  );
};
const ProjectsBox = styled.section`
  width: 100%;
  background: var(--color-bg-a);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperProjects = styled.section`
  width: 100%;
  padding: var(--64px) 0px;
`;
const ContentProjectList = styled.div`
  width: 100%;
`;
const CardProject = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: var(--32px);
`;
const CardProjectImage = styled.div`
  max-width: 680px;
  min-height: 380px;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  right: 0px;
`;
const CardProjectInfo = styled.div`
  max-width: 36.25rem;
  min-height: 30rem;
  position: relative;
  background: var(--color-bg-b);
  border-radius: 10px;
  border: solid 1px var(--color-main-b);
  display: flex;
  flex-direction: column;
  > header {
    padding: var(--32px);
    h3 {
      font-size: var(--24px);
      font-weight: 700;
    }
  }
  > main {
    flex: 1;
    padding: 0px var(--32px) var(--32px) var(--32px);
    p {
      font-size: var(--18px);
      line-height: var(--32px);
      max-width: 400px;
    }
  }
  > footer {
    padding: 0px var(--32px) var(--32px) var(--32px);
    > a {
      margin-right: var(--32px);
      button {
        background: var(--color-linear-a);
        color: var(--color-light-b);
        border-radius: 5px;
        cursor: pointer;
        height: 50px;
        padding: 0px var(--32px);
        transition: 0.2s;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        font-size: var(--18px);
      }
    }
  }
`;
export default Projects;
