import { lighten } from 'polished';
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
  width: 70px;
  height: 70px;
  border-radius: 4px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: #f1eee5;

  img {
    object-fit: contain;
    transform: scale(1.2);
    margin-top: -10px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
`;

export const Name = styled.h5`
  font-size: ${(p) => p.theme.font.size[16]}px;
  color: ${(p) => p.theme.color.neutral[900]};
`;

export const Desc = styled.p`
  font-size: ${(p) => p.theme.font.size[16]}px;
  color: ${(p) => p.theme.color.neutral[700]};
`;

export const Price = styled.p`
  font-size: ${(p) => p.theme.font.size[16]}px;
  color: ${(p) => p.theme.color.neutral[900]};
`;

export const QuantityBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: ${(p) => p.theme.font.size[16]}px;
  color: ${(p) => p.theme.color.neutral[900]};
  background-color: #f1eee5;
  padding: 2px;
  border-radius: 4px;

  > span {
    flex: 1;
    text-align: center;
    min-width: 24px;
  }
`;

export const QuantityButton = styled.div`
  font-size: ${(p) => p.theme.font.size[16]}px;
  color: ${(p) => p.theme.color.neutral[900]};
  width: 30px;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${lighten(0.05, '#f1eee5')};
  }
  &:active {
    background-color: ${lighten(0.07, '#f1eee5')};
  }

  > svg {
    width: 24px;
    height: 24px;
  }
`;
