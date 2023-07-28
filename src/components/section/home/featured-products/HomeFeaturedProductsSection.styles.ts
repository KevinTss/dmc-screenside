import styled from 'styled-components';

import { MediaQuery } from '../../../../constants';
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
  font-size: ${(p) => p.theme.font.size[48]};
  font-weight: ${(p) => p.theme.font.weight[500]};

  ${MediaQuery.M_AND_DOWN} {
    font-size: ${(p) => p.theme.font.size[24]};
  }
`;
