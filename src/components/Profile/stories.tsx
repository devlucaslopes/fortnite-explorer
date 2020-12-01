import { Story, Meta } from '@storybook/react/types-6-0'

import mock from './mock'

import Profile, { ProfileProps } from '.'

export default {
  title: 'Profile',
  component: Profile,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ProfileProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <Profile {...args} />
  </div>
)
