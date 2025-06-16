# storybook-addon-amplitude

A Storybook addon to capture events in [Amplitude](https://amplitude.com/).

Read the [blog post here](https://amplitude.engineering/product-analytics-for-storybook-introducing-the-amplitude-storybook-add-on-e8857fb8168a).

## Prerequisites

- Node.js 20 or higher
- Storybook 9.0 or higher
- An Amplitude account (free tier available)

## Version Compatibility

| Storybook Version | Addon Version |
| ----------------- | ------------- |
| 9.x               | 3.x           |
| 7.x               | 2.x           |
| 6.x               | 1.x           |

## What does it do?

The Amplitude Storybook addon emits events to Amplitude on two different occasions: when a user navigates to a new page and when a user changes a story's args.

## Getting Started

The first thing you'll need to do is sign up for Amplitude. If you already have an account, great! If you don't, you can [sign up here for free](https://amplitude.com/get-started).

Once you have an account, you can create a new project which will have an associated API key.

To do this, navigate to the Settings page.

<img width="560" alt="Screen Shot 2022-06-15 at 4 12 52 PM" src="https://user-images.githubusercontent.com/11462208/173921586-d06571ba-c533-45e6-994f-b7c29c1e669e.png">

Then, select Projects in the sidebar.

<img width="462" alt="Screen Shot 2022-06-15 at 4 15 33 PM" src="https://user-images.githubusercontent.com/11462208/173921661-407e5421-a0e2-42c7-bf66-2bcf8b9b8cee.png">

In the top right-hand corner, click the Create Project button and follow the instructions.

<img width="1785" alt="Screen Shot 2022-06-15 at 4 17 13 PM" src="https://user-images.githubusercontent.com/11462208/173921718-7979fb4d-0d9a-48e6-aa62-d4424fb38119.png">

Next, install the package as a devDependency in your project:

```console
# Using yarn
yarn add @amplitude/storybook-addon-amplitude --dev

# Using npm
npm install @amplitude/storybook-addon-amplitude --save-dev
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
window.AMPLITUDE_DEV_API_KEY = "<amplitude-dev-api-key>";
window.AMPLITUDE_PROD_API_KEY = "<amplitude-prod-api-key>";
```

If you want to post to the EU endpoint make sure to set the `serverUrl` option:

```ts
window.AMPLITUDE_OPTIONS = {
  serverUrl: "https://api.eu.amplitude.com/2/httpapi",
};
```

> Read more: [Configurations](https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#configure-the-sdk), [Endpoints](https://www.docs.developers.amplitude.com/analytics/apis/http-v2-api/#endpoints)

If you are in a TypeScript project you might want to add the following declarations:

```ts
declare global {
  interface Window {
    AMPLITUDE_DEV_API_KEY: string;
    AMPLITUDE_PROD_API_KEY: string;
    AMPLITUDE_OPTIONS: {
      serverUrl?: string;
    };
  }
}
```

Now your Storybook will begin emitting events to your project in Amplitude. You're ready to start creating charts in Amplitude!

## Example Charts

**Weekly unique users viewing Storybook documentation**

<img width="1494" alt="Screen Shot 2022-05-24 at 1 04 57 PM" src="https://user-images.githubusercontent.com/11462208/174133601-7f29014b-1e6e-4060-ba4c-ad478b43607e.png">

**Most commonly referenced Storybook categories**

<img width="1792" alt="Screen Shot 2022-05-31 at 1 54 41 PM" src="https://user-images.githubusercontent.com/11462208/174133334-251dd4b8-29ae-402f-a32e-3a98ceeb4747.png">

## Event Taxonomy

### User navigates to a new page

When a user switches to a new page, this addon emits an event to Amplitude that looks like this:

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

### User changes a story's args

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

Tracking the event in this way allows you to build charts in Amplitude to answer:

1. How often do people use the story args functionality?
2. In which category of pages people update the story args most frequently?
3. On which pages people update the story args most frequently?

## Troubleshooting

### Events not showing up in Amplitude?

- Verify your API keys are correctly set in `storybook/manager.js`
- Check your browser's console for any error messages
- Ensure you're using the correct server URL for your region

### Storybook not loading?

- Make sure the addon is properly installed and configured in `storybook/main.js`
- Check that your Storybook version is compatible (9.0 or higher)

## Contributing

We are always happy to receive contributions! Please [refer to our CONTRIBUTING guidelines](CONTRIBUTING) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Created by: [Mae Capozzi](https://github.com/maecapozzi)

Maintained by: [Mae Capozzi](https://github.com/maecapozzi), [Jack McCloy](https://github.com/jackmccloy), and [Jimmy Wilson](https://github.com/jimmynotjim)
