import styled from 'styled-components';

import { SectionCSS } from '../../../styles';

export const Content = styled.div`
  ${SectionCSS}
  display: flex;
  flex-direction: column;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 20px;
`;

export const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
