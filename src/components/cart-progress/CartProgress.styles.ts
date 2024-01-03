import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${(p) => `${p.theme.space.S20}px ${p.theme.space.S28}px`};
  padding-bottom: ${(p) => `${p.theme.space.S48}px`};
`;

export const Text = styled.p`
  color: ${(p) => p.theme.font.color[900]};

  > b {
    color: ${(p) => p.theme.color.primary[600]};
    font-weight: ${(p) => p.theme.font.weight[500]};
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.color.neutral[500]};
  height: 12px;
  border-radius: 20px;
`;

export const ProgressBar = styled.div`
  background-color: ${(p) => p.theme.color.primary[600]};
  height: 100%;
  border-radius: 20px;
`;
