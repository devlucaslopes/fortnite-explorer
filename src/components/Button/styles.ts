import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall} 0;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
    border: 0;
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
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
