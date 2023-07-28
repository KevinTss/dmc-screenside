import styled from 'styled-components';

import { MediaQuery } from '../../../constants';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-bottom: 120px;
  flex: 1;

  ${MediaQuery.M_AND_DOWN} {
    gap: 60px;
  }
`;
