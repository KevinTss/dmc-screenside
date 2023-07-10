import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  padding: ${(p) => p.theme.space.S16}px ${(p) => p.theme.space.S16}px;
  gap: ${(p) => p.theme.space.S16}px;

  & + & {
    border-top: 1px solid ${(p) => p.theme.color.neutral[400]};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  flex-shrink: 0;

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
  font-size: ${(p) => p.theme.font.size[16]}px;
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
