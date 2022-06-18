import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: 50px 0 20px 0;
`;

export const BottomContainer = styled.div`
  margin-top: 40px;

  p {
    font-size: 12px;
  }
`;
