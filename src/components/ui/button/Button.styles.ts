import { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  $variant?: 'default' | 'primary' | 'secondary';
  as?: 'button' | 'a';
  $isRound?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 0.5rem;
  border-style: none;
  color: ${(p) => p.theme.font.color[900]};
  cursor: pointer;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  gap: ${(p) => p.theme.space.S16}px;
  padding: ${(p) => p.theme.space.S20}px ${(p) => p.theme.space.S24}px;
  transition: background-color 0.2s ease-in-out;
  width: fit-content;

  ${(p) => {
    if (p.$variant === 'primary') {
      return css`
        background-color: ${(p) => p.theme.color.transparent};
        &:hover {
          background-color: ${(p) => p.theme.color.neutral[100]};
        }
        &:active {
          background-color: ${(p) => p.theme.color.neutral[200]};
        }
        &:focus {
          background-color: ${(p) => p.theme.color.transparent};
          outline: 2px solid ${(p) => p.theme.color.neutral[300]};
        }
      `;
    }

    if (p.$variant === 'secondary') {
      return css`
        background-color: ${(p) => p.theme.color.transparent};
        &:hover {
          background-color: ${(p) => p.theme.color.neutral[100]};
        }
        &:active {
          background-color: ${(p) => p.theme.color.neutral[200]};
        }
        &:focus {
          background-color: ${(p) => p.theme.color.transparent};
          outline: 2px solid ${(p) => p.theme.color.neutral[300]};
        }
      `;
    }

    return css`
      background-color: ${(p) => p.theme.color.transparent};
      &:hover {
        background-color: ${(p) => p.theme.color.neutral[100]};
      }
      &:active {
        background-color: ${(p) => p.theme.color.neutral[200]};
      }
      &:focus {
        background-color: ${(p) => p.theme.color.transparent};
        outline: 2px solid ${(p) => p.theme.color.neutral[300]};
      }
    `;
  }}
`;
