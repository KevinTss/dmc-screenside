import styled from 'styled-components';

export const AdvertisementContainer = styled.div`
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
  font-weight: 400;
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
