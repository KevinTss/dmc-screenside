import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  border: 1px solid green;

  &:hover {
    background: grey;
  }
`;

export const ImageContainer = styled.div``;

export const CardBody = styled.div``;

export const Name = styled.p`
  font-size: 1rem;
`;

export const Price = styled.p`
  font-size: 1rem;
`;
