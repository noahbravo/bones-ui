import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'bones-ui',
      values: [
        {
          name: 'bones-ui',
          value: '#0098a8',
        }
      ]
    }
  }
}

export default preview
