import Heading from 'components/Heading'
import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <S.Content>
      <Heading>Fortnite Explorer</Heading>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Base
