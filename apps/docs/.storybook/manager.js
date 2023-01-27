import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'Artly-UI',
})

addons.setConfig({
  theme,
  panelPosition: 'right',
})
