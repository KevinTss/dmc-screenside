import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 50px 0;
`;

export const ButtonContainer = styled.div`
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

export const Cockpit = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  flex: 1;
`;
