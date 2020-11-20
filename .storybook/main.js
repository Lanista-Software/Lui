// .storybook/main.js

const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/**/**.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    '@storybook/addon-controls',
    "@storybook/preset-scss",
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   // Return the altered config
  //   return config;
  // },
  webpackFinal: async (config, { configType }) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '~': path.resolve(__dirname, '../')
      }
    }
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          prependData: `@import "~/src/assets/style.scss";`,
        }
      }],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  
};
