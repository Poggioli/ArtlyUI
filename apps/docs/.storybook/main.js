module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      "name": '@storybook/addon-essentials',
      "options": {
        "backgrounds": false,
        "actions": false,
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storybook-addon-themes',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}