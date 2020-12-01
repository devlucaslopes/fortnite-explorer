import { useState } from 'react'
import Router from 'next/router'
import { UserNinja } from '@styled-icons/fa-solid'
import { SearchAlt } from '@styled-icons/boxicons-regular'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const Form = () => {
  const [nickname, setNickname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    Router.push(`/${nickname}`)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <TextField
        icon={<UserNinja />}
        placeholder="Digit your nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Button type="submit" icon={<SearchAlt />} />
    </S.Wrapper>
  )
}

export default Form
