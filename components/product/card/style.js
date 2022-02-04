import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.m};

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 240px;
  height: 300px;
`;

export const CardBody = styled.div``;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
