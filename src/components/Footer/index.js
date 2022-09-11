import React from "react";
import styled from "styled-components";
import { ReactComponent as Brand } from "../../images/brand.svg";

const footer = () => {
  const dataAtual = new Date();
  const year = dataAtual.getFullYear();
  return (
    <FooterBox>
      <Container>
        <WrapperFooter>
          <p>© Copyright {year} - Todos os direitos reservados.</p>
          <Brand />
        </WrapperFooter>
      </Container>
    </FooterBox>
  );
};
const FooterBox = styled.section`
  width: 100%;
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperFooter = styled.section`
  width: 100%;
  padding: var(--64px) 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: var(--18px);
    font-weight: 600;
  }
`;
export default footer;
