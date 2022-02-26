import styled from 'styled-components';

export const AdvertisementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 500px;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const ButtonContainer = styled.div`
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
