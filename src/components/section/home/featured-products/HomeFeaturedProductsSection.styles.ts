import styled from 'styled-components';
import { SectionCSS } from '../../../../styles';

export const Container = styled.section`
  ${SectionCSS}
`;

export const ButtonContainer = styled.div`
  z-index: 1;
  margin-bottom: ${(p) => p.theme.space.S16};
`;

export const Cockpit = styled.div`
  display: flex;
  width: 100%;

  a {
    color: black;

    text-decoration: none;
  }
`;

export const Title = styled.h2`
  flex: 1;
`;
