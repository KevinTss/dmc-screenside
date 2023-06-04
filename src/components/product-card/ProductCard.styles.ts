import NextImage from 'next/image';
import Link from 'next/link';
import { Row } from 'src/styles';
import styled from 'styled-components';

export const Image = styled(NextImage)`
  object-fit: contain;
  transition: all 0.8s ease;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 320px;
  background-color: ${(p) => p.theme.color.neutral[100]};
  border-radius: 8px;
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