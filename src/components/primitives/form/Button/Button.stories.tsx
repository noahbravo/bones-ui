import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'bones-ui/Button',
  component: Button
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Click = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Click.args = {
  type: 'button',
  children: 'button',
  variant: 'ghost'
}

export const Submit = Template.bind({})
Submit.args = {
  type: 'submit',
  children: 'submit',
  variant: 'full',
  bgColor: 'teal'
}
