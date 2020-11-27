import { Story, Meta } from '@storybook/react/types-6-0'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Heading'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <Heading>This a title</Heading>
