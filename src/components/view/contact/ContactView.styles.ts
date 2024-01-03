import { MediaQuery } from 'src/constants';
import { SectionCSS } from 'src/styles';
import styled from 'styled-components';

export const ContentContainer = styled.section`
  ${SectionCSS}
  display: flex;
  gap: 20px;
  padding-top: 150px;
  align-items: center;

  ${MediaQuery.S_AND_DOWN} {
    flex-direction: column;
  }
`;

export const Iframe = styled.iframe`
  border: none;
  width: 100%;
  height: 300px;

  ${MediaQuery.S_AND_DOWN} {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #16322c;
`;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  text-align: center;
  color: #323233;
  max-width: 650px;
`;
