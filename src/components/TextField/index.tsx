import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  icon: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ icon, ...props }: TextFieldProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    <S.Input {...props} />
  </S.Wrapper>
)

export default TextField
