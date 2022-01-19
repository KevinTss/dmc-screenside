import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  border: 1px solid red;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
`;
