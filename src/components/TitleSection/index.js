import React from "react";
import styled from "styled-components";

const TitleSection = ({ text }) => {
  return (
    <ContentAboutTitle>
      <h2>{text}</h2>
    </ContentAboutTitle>
  );
};
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
export default TitleSection;
