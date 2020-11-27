import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    border-radius: ${theme.border.radius};

    &:focus-within {
      border: 1px solid ${theme.colors.secondary};
      svg,
      input {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 1.6rem;
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: none;
    outline: none;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
  `}
`
