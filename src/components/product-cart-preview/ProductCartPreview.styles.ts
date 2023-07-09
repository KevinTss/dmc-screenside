import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  margin: ${({ theme }) => `${theme.space.S12} 0`};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  min-width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-right: ${({ theme }) => theme.space.S12};

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
  font-size: 10px;
`;

export const Quantity = styled.p`
  font-size: 10px;
`;

export const Price = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const TotalPrice = styled.p`
  font-size: 10px;
`;
