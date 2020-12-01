import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  icon: React.ReactNode
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, icon }: ButtonProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    {children}
  </S.Wrapper>
)

export default Button
