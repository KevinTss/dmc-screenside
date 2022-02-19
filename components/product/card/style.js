import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.m};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
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
  padding: ${({ theme }) => theme.spacing.m};

  button {
    width: 100%;
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.color.text};
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.color.text};
`;
