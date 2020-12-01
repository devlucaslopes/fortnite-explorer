import styled, { css, keyframes } from 'styled-components'

const apperIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};

    animation: ${apperIn} 500ms ease-in-out forwards;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding-bottom: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    border-bottom: 5px solid ${theme.colors.secondary};

    > span {
      color: ${theme.colors.secondary};
    }
  `}
`

export const GameMode = styled.h3`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > svg {
      margin-right: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }
  `}
`

export const ListScore = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const BackButton = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: underline;
    color: ${theme.colors.secondary};
    text-align: center;
    cursor: pointer;
  `}
`
