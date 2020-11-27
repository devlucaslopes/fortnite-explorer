import { Story, Meta } from '@storybook/react/types-6-0'
import { UserNinja } from '@styled-icons/fa-solid'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    icon: <UserNinja />,
    placeholder: 'Your nickname'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
    <TextField {...args} />
  </div>
)
