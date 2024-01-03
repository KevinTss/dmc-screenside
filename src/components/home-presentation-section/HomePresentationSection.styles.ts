import Link from 'next/link';
import { MediaQuery } from 'src/constants';
import { SectionCSS } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${SectionCSS}
  flex-direction: row;
  gap: 36px;

  ${MediaQuery.M_AND_DOWN} {
    flex-direction: column;
  }

  > div:first-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
  }

  > div:last-child {
    flex: 1;
    position: relative;

    ${MediaQuery.M_AND_DOWN} {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-family: 'Outfit';
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.color.primary[900]};

  ${MediaQuery.M_AND_DOWN} {
    font-size: 36px;
    line-height: 1.5;
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;

  ${MediaQuery.M_AND_DOWN} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CTA = styled(Link)`
  background-color: ${(p) => p.theme.color.primary[600]};
  padding: 20px 24px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: white;
`;
