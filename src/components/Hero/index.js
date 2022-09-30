import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styled from "styled-components";

import { techs, Icons } from "./content";

import ButtonCV from "../ButtonCV";

const Hero = () => {
  return (
    <HeroBox>
      <Container>
        <WrapperHero>
          <ContentBanner data-aos="fade-up" data-aos-duration="2000">
            <span>Olá, me chamo</span>
            <h1>Jackson Bruno</h1>
            <h4>Desenvolvedor frontend</h4>
            <p>
              Sou responsável por dar vida ao seu projeto. Transformo design em
              páginas para a web com agilidade, qualidade e alta perfomance.
            </p>
            <ContentHeroActions>
              <ButtonCV />
              <ul>
                <li>
                  <LinkRoute
                    href="https://www.linkedin.com/in/jackson-bruno-6741791b0/"
                    target="_blanck"
                  >
                    <IoLogoLinkedin />
                  </LinkRoute>
                </li>
                <li>
                  <LinkRoute
                    href="https://github.com/jacksonbrunoss"
                    target="_blanck"
                  >
                    <IoLogoGithub />
                  </LinkRoute>
                </li>
              </ul>
            </ContentHeroActions>
            <HeroTechs>
              <ul>
                {techs.map((item, i) => {
                  const Icon = Icons[item.label];
                  return (
                    <li key={i}>
                      <CardTechs>
                        <div>
                          <Icon />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </CardTechs>
                    </li>
                  );
                })}
              </ul>
            </HeroTechs>
          </ContentBanner>
        </WrapperHero>
      </Container>
    </HeroBox>
  );
};
const HeroBox = styled.header`
  width: 100%;
  background: var(--color-radial-a);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperHero = styled.section`
  width: 100%;
  padding: 6.5rem var(--16px) var(--64px) var(--16px);
  display: flex;
`;
const ContentBanner = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  > span {
    font-size: var(--24px);
    text-transform: uppercase;
    font-weight: 300;
  }
  > h1 {
    font-size: var(--64px);
    font-weight: 700;
    text-transform: uppercase;
    background: var(--color-linear-a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > h4 {
    font-size: var(--24px);
    text-transform: uppercase;
    letter-spacing: var(--8px);
    font-weight: 300;
  }
  > p {
    font-size: var(--16px);
    max-width: var(--mobile);
    margin: 0 auto;
    padding-top: var(--16px);
    line-height: var(--24px);
    color: var(--color);
  }
`;
const ContentHeroActions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--18px);
  padding: var(--32px) 0px;
  > ul {
    display: flex;
  }
`;
const LinkRoute = styled.a`
  color: var(--light);
  min-height: 50px;
  min-width: 50px;
  background: var(--color-linear-a);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  font-size: var(--24px);
  margin-left: var(--16px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroTechs = styled.div`
  padding-top: var(--64px);
  margin: 0 auto;
  > ul {
    width: 100%;
    display: flex;
    gap: var(--32px);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
const CardTechs = styled.div`
  max-width: 17.5rem;
  background: var(--comp);
  border: solid 1px var(--color-main-b);
  border-radius: 10px;
  > div {
    width: 120px;
    height: 120px;
    background: var(--color-linear-a);
    border-radius: 100px;
    margin: var(--32px) auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--64px);
    color: var(--light);
  }
  > h4 {
    font-size: var(--24px);
    font-weight: 500;
    padding-bottom: var(--16px);
  }
  > p {
    font-size: var(--16px);
    padding-right: var(--16px);
    padding-left: var(--16px);
    font-weight: 300;
    line-height: var(--24px);
    padding-bottom: var(--32px);
    color: var(--color);
  }
`;

export default Hero;
