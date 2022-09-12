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
                        <img src={item.image} alt={item.name} />
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
  padding: var(--64px) var(--16px);
`;
const ContentProjectList = styled.div`
  width: 100%;
  @media (max-width: 50rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const CardProject = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: var(--32px);
  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;
const CardProjectImage = styled.div`
  max-width: 42.5rem;
  min-height: 23.75rem;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  right: 0px;
  @media (max-width: 1000px) {
    max-width: 32.5rem;
    min-height: 23.75rem;
  }
  @media (max-width: 50rem) {
    display: none;
  }
`;
const CardProjectInfo = styled.div`
  max-width: 36.25rem;
  min-height: 30rem;
  position: relative;
  background: var(--color-bg-b);
  border-radius: 0.625rem;
  border: solid 1px var(--color-main-b);
  display: flex;
  flex-direction: column;
  > header {
    padding: var(--32px);
    h3 {
      font-size: var(--24px);
      font-weight: 700;
      @media (max-width: 50rem) {
        max-width: 100%;
        text-align: center;
      }
    }
  }
  > main {
    flex: 1;
    padding: 0px var(--32px) var(--32px) var(--32px);
    p {
      font-size: var(--18px);
      line-height: var(--32px);
      max-width: 400px;
      font-weight: 300;
      color: var(--color-light-a);
      @media (max-width: 50rem) {
        max-width: 100%;
        text-align: center;
      }
    }
    img {
      margin-top: var(--32px);
      border-radius: 10px;
      display: none;
      @media (max-width: 50rem) {
        display: block;
      }
    }
  }
  > footer {
    padding: 0px var(--32px) var(--32px) var(--32px);
    @media (max-width: 50rem) {
      max-width: 100%;
      text-align: center;
    }
    > a {
      margin-right: var(--24px);
      @media (max-width: 50rem) {
        display: flex;
        flex-wrap: wrap;
        margin-right: 0px;
        margin-bottom: var(--16px);
      }
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
