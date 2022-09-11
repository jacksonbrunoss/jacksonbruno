import React from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.svg";

import { info, Icons, skills } from "./content";

const About = () => {
  return (
    <AboutBox id="quemsou">
      <Container>
        <WrapperAbout>
          <ContentAboutTitle>
            <h2>Quem Sou</h2>
          </ContentAboutTitle>
          <ContentAboutInfo>
            <AboutAvatarBox>
              <img src={avatar} alt="Jackson Bruno" />
            </AboutAvatarBox>
            <AboutAvatarInfo>
              {info.map((item, i) => (
                <p key={i}>{item.text}</p>
              ))}
            </AboutAvatarInfo>
          </ContentAboutInfo>
          <ContentSkillsInfo>
            <div>
              <h2>Minhas habilidades</h2>
            </div>
            <SkillsList>
              <ul>
                {skills.map((item, i) => {
                  const Icon = Icons[item.label];
                  return (
                    <li key={i}>
                      <CardSkills>
                        <Icon />
                      </CardSkills>
                    </li>
                  );
                })}
              </ul>
            </SkillsList>
          </ContentSkillsInfo>
        </WrapperAbout>
      </Container>
    </AboutBox>
  );
};
const AboutBox = styled.section`
  width: 100%;
  background: var(--color-linear-b);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperAbout = styled.section`
  width: 100%;
  padding: var(--64px) 0px;
`;
const ContentAboutTitle = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: var(--64px);
  > h2 {
    font-size: var(--32px);
    text-transform: uppercase;
    font-weight: 600;
  }
`;
const ContentAboutInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--32px);
`;
const AboutAvatarBox = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const AboutAvatarInfo = styled.aside`
  > p {
    max-width: 480px;
    font-size: var(--18px);
    line-height: var(--32px);
    font-weight: 300;
  }
`;
const ContentSkillsInfo = styled.div`
  width: 100%;
  > div {
    text-align: center;
    padding-top: var(--64px);
    > h2 {
      font-size: var(--32px);
      text-transform: uppercase;
      font-weight: 600;
      background: var(--color-linear-a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
const SkillsList = styled.div`
  width: 100%;
  > ul {
    display: flex;
    justify-content: center;
    gap: var(--32px);
    flex-wrap: wrap;
  }
`;
const CardSkills = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  background: var(--color-bg-b);
  border-radius: 0.625rem;
  border: solid 1px var(--color-main-b);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--64px);
  color: var(--color-main-c);
`;
export default About;
