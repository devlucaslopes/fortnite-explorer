import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    max-width: min(26rem, 100%);
    margin-top: ${theme.spacings.xsmall};
    display: flex;

    ${TextFieldStyles.Wrapper} {
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    }

    ${ButtonStyles.Wrapper} {
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    }
  `}
`
