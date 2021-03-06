import styled from 'styled-components';
import { Wrapper } from '../../../styles';
import { MediaQuery } from '../../../utils';

export const ContentContainer = styled(Wrapper)`
  display: flex;
  gap: 20px;

  ${MediaQuery.S_AND_DOWN} {
    flex-direction: column;
  }

  form {
    padding-right: 50px;

    ${MediaQuery.S_AND_DOWN} {
      padding-right: 0;
    }
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

  ${MediaQuery.S_AND_DOWN} {
    margin-top: 50px;
  }
`;
