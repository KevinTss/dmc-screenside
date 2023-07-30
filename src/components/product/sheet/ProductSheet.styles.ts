import { MediaQuery } from 'src/constants';
import { SectionCSS } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.article`
  ${SectionCSS}
  gap: ${({ theme }) => theme.space.S48};
  height: auto;
  padding-top: 124px;
  padding-bottom: 124px;
  margin-top: 85px;
`;

export const Body = styled.div`
  display: flex;
  gap: 75px;

  ${MediaQuery.M_AND_DOWN} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 600px;

  ${MediaQuery.M_AND_DOWN} {
    min-height: 200px;
  }

  img {
    object-fit: contain;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  line-height: 40px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
`;

export const Separator = styled.hr`
  border-top: 1px solid ${(p) => p.theme.color.neutral[500]};
  border-left: none;
  border-bottom: none;
  border-right: none;
  width: 100%;
  margin: 32px 0;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size[18]};
  margin-bottom: ${({ theme }) => theme.space.S12};
`;

export const BreadcrumbsContainer = styled.div`
  font-size: ${({ theme }) => theme.font.size[14]};
  color: ${({ theme }) => theme.font.color[600]};
  font-weight: ${({ theme }) => theme.font.weight[400]};

  > b {
    color: ${({ theme }) => theme.font.color[800]};
    font-weight: ${({ theme }) => theme.font.weight[500]};
  }
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size[16]};
  background-color: ${({ theme }) => theme.color.primary[600]};
  border: 1px solid ${({ theme }) => theme.color.primary[600]};
  color: ${({ theme }) => theme.color.neutral[0]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  padding: ${(p) => `${p.theme.space.S16}px ${p.theme.space.S24}px`};
  margin-top: ${(p) => p.theme.space.S12}px;
  cursor: pointer;
  border-radius: 4px;

  &[disabled] {
    cursor: not-allowed;
    filter: grayscale(60%);
  }
`;
