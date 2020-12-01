import Base from 'templates/Base'
import Profile from 'components/Profile'
import api from 'services/api'
import { GetServerSideProps } from 'next'

export type GameStatsProps = {
  placetop1: number
  placetop3: number
  placetop5: number
  kills: number
}

export type AccountProps = {
  name: string
  level: string
}

type ResultProps = {
  account: AccountProps
  global_stats: {
    solo: GameStatsProps
    duo: GameStatsProps
    squad: GameStatsProps
  }
}

const Result = ({ account, global_stats }: ResultProps) => {
  return (
    <Base>
      <Profile account={account} stats={global_stats} />
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { nickname } = context.query

  const {
    data: { account_id }
  } = await api.get(`/lookup?username=${nickname}`)

  const {
    data: { name, account, global_stats }
  } = await api.get(`/stats?account=${account_id}`)

  return {
    props: { account: { ...account, name }, global_stats }
  }
}

export default Result
