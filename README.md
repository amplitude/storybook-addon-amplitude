# storybook-addon-amplitude

A storybook addon to capture events in [Amplitude](https://amplitude.com/).

## What does it do?

The Amplitude Storybook add-on emits events to Amplitude on two different occasions: when a user navigates to a new page and when a user changes a story's args.

## Getting Started

The first thing you’ll need to do is sign up for Amplitude. If you already have an account, great! If you don’t, you can [sign up here](https://amplitude.com/get-started) for free. 

Once you have an account, you can create a new project which will have an associated API key. 

To do this, navigate to the Settings page.

<img width="560" alt="Screen Shot 2022-06-15 at 4 12 52 PM" src="https://user-images.githubusercontent.com/11462208/173921586-d06571ba-c533-45e6-994f-b7c29c1e669e.png">

Then, select Projects in the sidebar. 

<img width="462" alt="Screen Shot 2022-06-15 at 4 15 33 PM" src="https://user-images.githubusercontent.com/11462208/173921661-407e5421-a0e2-42c7-bf66-2bcf8b9b8cee.png">

In the top right hand corner, click the Create Project button and follow the instructions.

<img width="1785" alt="Screen Shot 2022-06-15 at 4 17 13 PM" src="https://user-images.githubusercontent.com/11462208/173921718-7979fb4d-0d9a-48e6-aa62-d4424fb38119.png">

Next, install the package as a devDependency in your project:

```console
yarn add @amplitude/storybook-addon-amplitude --dev
```

in `storybook/main.js`

```diff
module.exports: {
  addons: [
+   '@amplitude/storybook-addon-amplitude/preset',
  ]
}
```

Then, set your Amplitude API keys in `./storybook/manager.js`

```ts
window.AMPLITUDE_DEV_API_KEY = '<amplitude-dev-api-key>';
window.AMPLITUDE_PROD_API_KEY = '<amplitude-prod-api-key>';
```

Now your storybook will begin emitting events to your project in Amplitude. You’re ready to start creating charts in Amplitude!

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

