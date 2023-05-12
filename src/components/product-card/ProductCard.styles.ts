import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral[200]};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 240px;
  height: 300px;

  img {
    object-fit: contain;
  }
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.space.S04};

  button {
    width: 100%;
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size[16]};
  color: ${({ theme }) => theme.font.color[800]};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size[16]};
  margin-bottom: ${({ theme }) => theme.space.S04};
  color: ${({ theme }) => theme.font.color[800]};
`;
