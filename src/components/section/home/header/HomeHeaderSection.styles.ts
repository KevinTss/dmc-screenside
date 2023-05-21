import Link from 'next/link';
import styled from 'styled-components';

export const AdvertisementContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-family: 'Outfit';
  font-weight: 800;
  font-size: 96px;
  line-height: 130px;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CTA = styled(Link)`
  background-color: #ffffff;
  padding: 20px 24px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #1b1b1b;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
