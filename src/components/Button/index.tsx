import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = {
  label: string
  icon: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ label, icon }: ButtonProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    {label}
  </S.Wrapper>
)

export default Button
