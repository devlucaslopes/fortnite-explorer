import { Story, Meta } from '@storybook/react/types-6-0'
import { SearchAlt } from '@styled-icons/boxicons-regular'

import Button, { ButtonProps } from '.'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    icon: <SearchAlt />,
    label: 'Procurar'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
