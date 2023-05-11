import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacing.m};
  min-height: 500px;
  height: auto;
  margin: ${({ theme }) => `${theme.spacing.xl} 0`};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  img {
    object-fit: contain;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.size.xl};
  padding-bottom: 16px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  padding-bottom: 16px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
