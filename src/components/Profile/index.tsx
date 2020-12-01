import Link from 'next/link'

import { User as Solo } from '@styled-icons/boxicons-solid/User'
import { Users as Duo } from '@styled-icons/heroicons-solid/Users'
import { Users as Squad } from '@styled-icons/fa-solid/Users'

import { AccountProps, GameStatsProps } from 'pages/[nickname]'

import * as S from './styles'

type ProfileProps = {
  account: AccountProps

  stats: {
    solo: GameStatsProps
    duo: GameStatsProps
    squad: GameStatsProps
  }
}

const Profile = ({ account, stats }: ProfileProps) => (
  <S.Wrapper>
    <S.Title>
      Global stats from: <span>{account.name}</span>
    </S.Title>

    <S.GameMode>Account informations</S.GameMode>
    <S.ListScore>
      <li>Level: {account.level}</li>
    </S.ListScore>

    <S.GameMode>
      <Solo size={18} />
      Solo
    </S.GameMode>
    <S.ListScore>
      <li>Wins: {stats.solo.placetop1}</li>
      <li>Top3: {stats.solo.placetop3}</li>
      <li>Top5: {stats.solo.placetop5}</li>
      <li>Kills: {stats.solo.kills}</li>
    </S.ListScore>

    <S.GameMode>
      <Duo size={18} />
      Duo
    </S.GameMode>
    <S.ListScore>
      <li>Wins: {stats.duo.placetop1}</li>
      <li>Top3: {stats.duo.placetop3}</li>
      <li>Top5: {stats.duo.placetop5}</li>
      <li>Kills: {stats.duo.kills}</li>
    </S.ListScore>

    <S.GameMode>
      <Squad size={18} />
      Squad
    </S.GameMode>
    <S.ListScore>
      <li>Wins: {stats.squad.placetop1}</li>
      <li>Top3: {stats.squad.placetop3}</li>
      <li>Top5: {stats.squad.placetop5}</li>
      <li>Kills: {stats.squad.kills}</li>
    </S.ListScore>

    <Link href="/">
      <S.BackButton>Search again</S.BackButton>
    </Link>
  </S.Wrapper>
)

export default Profile
