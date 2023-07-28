import NextImage from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Row } from '../../styles';

export const Image = styled(NextImage)`
  object-fit: contain;
  transition: all 0.8s ease;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 320px;
  background-color: ${(p) => p.theme.color.background.mainSoft};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 75px;
    height: 75px;
    fill: ${(p) => p.theme.color.primary[200]};
    opacity: 0.3;
  }
`;

export const Container = styled(Link)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  text-decoration: none;
  width: 100%;

  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${(p) => `${p.theme.space.S20}px ${p.theme.space.S16}px`};

  button {
    width: 100%;
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size[16]};
  color: ${({ theme }) => theme.font.color[800]};
`;

export const RowBottom = styled(Row)``;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size[16]};
  color: ${({ theme }) => theme.font.color[800]};
`;

export const Category = styled.span`
  font-size: ${({ theme }) => theme.font.size[16]};
  color: ${({ theme }) => theme.font.color[700]};
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid ${({ theme }) => theme.color.neutral[300]};
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
