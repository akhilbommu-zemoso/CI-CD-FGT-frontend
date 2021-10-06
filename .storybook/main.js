module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-cssresources/register',
    '@storybook/addon-storysource',
    '@storybook-addon-material-ui/register',
    '@storybook/addon-docs/react/preset'
  ],
};
