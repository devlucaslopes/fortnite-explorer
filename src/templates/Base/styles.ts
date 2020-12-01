import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background-image: url('https://images.wallpapersden.com/image/download/fortnite-battle-royale-chapter-2_a2xla2uUmZqaraWkpJRmbmdlrWZlbWU.jpg');
  background-position: left center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.7);
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 130rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: ${theme.layers.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
