import { SectionCSS } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    z-index: 1;
  }
`;

export const TitleWrapper = styled.div`
  ${SectionCSS}
  z-index: 2;
`;

export const H1 = styled.h1`
  color: white;
  font-size: ${(p) => p.theme.font.size[96]};
  font-weight: ${(p) => p.theme.font.weight[800]};
`;
