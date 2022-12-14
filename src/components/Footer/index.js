import React from "react";
import styled from "styled-components";
import { ReactComponent as Brand } from "../../images/brand-2.svg";

const footer = () => {
  const dataAtual = new Date();
  const year = dataAtual.getFullYear();
  return (
    <FooterBox>
      <Container>
        <WrapperFooter>
          <p>© Copyright {year} - Todos os direitos reservados.</p>
          <a href="#">
            <Brand />
          </a>
        </WrapperFooter>
      </Container>
    </FooterBox>
  );
};
const FooterBox = styled.footer`
  width: 100%;
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperFooter = styled.section`
  width: 100%;
  padding: var(--32px) var(--16px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  > p {
    font-size: var(--18px);
    margin-bottom: var(--16px);
  }
`;
export default footer;
