import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'bones-ui/Button',
  component: Button
} as Meta<ButtonProps>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<ButtonProps>

export const Click: Story = {
  args: {
    type: 'button',
    children: 'button',
    variant: 'ghost'
  }
}

export const Submit: Story = {
  args: {
    type: 'submit',
    children: 'submit',
    variant: 'full'
  }
}
