import styled from 'styled-components';
import { Wrapper } from '../../../styles';

export const ContentContainer = styled(Wrapper)`
  display: flex;
  gap: 20px;

  form {
    padding-right: 50px;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Iframe = styled.iframe`
  border: none;
  margin-bottom: 50px;
`;
