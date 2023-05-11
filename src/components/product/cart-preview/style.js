import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.m} 0`};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  min-width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.border.radius};
  margin-right: ${({ theme }) => theme.spacing.s};

  img {
    object-fit: contain;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardActions = styled.div``;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Quantity = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const TotalPrice = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
`;
