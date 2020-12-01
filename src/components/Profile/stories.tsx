import { Story, Meta } from '@storybook/react/types-6-0'
import Profile from '.'

export default {
  title: 'Profile',
  component: Profile,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <Profile />
  </div>
)
