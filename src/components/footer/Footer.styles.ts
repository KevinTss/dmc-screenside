import { SectionCSS } from 'src/styles';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.primary[900]};
  padding: 50px 0 20px 0;
  /* color: white; */
`;

export const FooterWrapper = styled.section`
  ${SectionCSS}
`;

export const BottomContainer = styled.div`
  margin-top: 40px;

  p {
    font-size: 12px;
  }
`;

export const SubTitle = styled.h4`
  color: ${(p) => p.theme.font.color[0]};
  font-size: ${(p) => p.theme.font.size[16]};
  font-weight: ${(p) => p.theme.font.weight[500]};
`;

export const Text = styled.p`
  color: ${(p) => p.theme.font.color[0]};
  font-size: ${(p) => p.theme.font.size[16]};
  font-weight: ${(p) => p.theme.font.weight[400]};
`;
