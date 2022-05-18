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

## Event Taxonomy

This storybook addon emits events to Amplitude on two different occasions, when a user switches to a new page and when a user changes a story's args.

When a user switches to a new page, this addon emits an event that looks like this:

```
{
  event_type: "viewed documentation", 
  event_properties: {
    category: 'variants', 
    page: "secondarybuttongroup"
  }
}
```

Tracking this event in this way allows you to build charts in Amplitude to show:

a) How many people have viewed your Storybook instance over time

b) What category of pages people are viewing most frequently

c) What pages people are viewing most frequently

When a user changes a story's args, this addon emits an event that looks like this:

```
{
  event_type: "updated story args", 
  event_properties: {
    category: 'variants', 
    page: "secondarybuttongroup"
  }
}
```

a) How often people use the story args functionality

b) In which category of pages people update the story args most frequently 

c) On which pages people update the story args most frequently
