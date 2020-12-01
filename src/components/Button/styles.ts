import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
    outline: 0;
    border-radius: ${theme.border.radius};
    cursor: pointer;

    &:hover {
      background: ${darken(0.1, theme.colors.secondary)};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 1.6rem;
      color: ${theme.colors.white};
    }
  `}
`
