# storybook-addon-amplitude

A storybook addon to capture events in [Amplitude](https://amplitude.com/).

## What does it do?

The Amplitude Storybook add-on emits events to Amplitude on two different occasions: when a user navigates to a new page and when a user changes a story's args.

## Usage Guidelines

Install:

```bash
yarn add @amplitude/storybook-addon-amplitude --dev
```

in `storybook/main.js`

```bash
module.exports: {
  addons: [
    '@amplitude/storybook-addon-amplitude/preset',
  ]
}
```

Then, set your Amplitude API keys in `./storybook/manager.js`

```bash
window.AMPLITUDE_DEV_API_KEY = '<amplitude-dev-api-key>';
window.AMPLITUDE_PROD_API_KEY = '<amplitude-prod-api-key>';
```

## Event Taxonomy

### User navigates to a new page
When a user switches to a new page, this add-on emits an event to Amplitude that looks like this:

```
{
  event_type: "viewed documentation", 
  event_properties: {
    category: 'variants', 
    page: "secondarybuttongroup"
  }
}
```

Tracking the event in this way allows you to build charts in Amplitude to show:

1. How many people have viewed your Storybook over time
2. What categories people are viewing most frequently
3. What pages people are viewing most frequently

### User changes a story’s args
When a user changes a story's args, this add-on emits an event that looks like this:

```
{
  event_type: "updated story args", 
  event_properties: {
    category: 'variants', 
    page: "secondarybuttongroup"
  }
}
```
 
Tracking the event in this way allows you to build charts in Amplitude to answer:

1. How often do people use the story args functionality?
2. In which category of pages people update the story args most frequently?
3. On which pages people update the story args most frequently?

