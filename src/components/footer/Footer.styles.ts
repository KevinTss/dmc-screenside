import Link from 'next/link';
import styled from 'styled-components';

import { SectionCSS } from '../../styles';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.primary[900]};
  padding: 50px 0 20px 0;
`;

export const FooterWrapper = styled.section`
  ${SectionCSS}
`;

export const BottomContainer = styled.div`
  margin-top: 40px;

  p {
    font-size: 12px;
  }
`;

export const SubTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.font.color[0]};
  margin-bottom: 40px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 0px;
    opacity: 0.2;
    border: 1px solid #ffffff;
    bottom: -16px;
    left: 0;
  }
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.font.color[0]};
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)``;
