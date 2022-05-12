# storybook-addon-amplitude

A storybook addon to capture events in [Amplitude](https://amplitude.com/).

## What does it do?

When configured correctly, this storybook addon will send events to your Amplitude instance in two cases:

1. If a user navigates from one story to another
2. If a user modifies story args

## Usage Guidelines

Install:

```bash
yarn add @amplitude/storybook-addon-amplitude --dev
```

in `storybook/main.js`

```bash
module.exports: {
  addons: [
    'storybook-addon-amplitude/preset',
  ]
}
```

Then, set your Amplitude API keys in `./storybook/manager.js`

```bash
window.AMPLITUDE_DEV_API_KEY = '<amplitude-dev-api-key>';
window.AMPLITUDE_PROD_API_KEY = '<amplitude-prod-api-key>';
```
