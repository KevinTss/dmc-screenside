import styled from 'styled-components';

import { MediaQuery } from '../../utils';

export const MainContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  ${MediaQuery.XL_AND_DOWN} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${MediaQuery.L_AND_DOWN} {
    grid-template-columns: 1fr 1fr;
  }

  ${MediaQuery.S_AND_DOWN} {
    grid-template-columns: 1fr;
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  justify-content: center;
`;
