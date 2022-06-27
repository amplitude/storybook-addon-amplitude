import { window as globalWindow } from "global";
import { addons } from "@storybook/addons";
import { STORY_CHANGED, STORY_ARGS_UPDATED } from "@storybook/core-events";
import { parsePath } from "../parsePath";
// @ts-ignore
import amplitude from "amplitude-js";

addons.register("storybook/amplitude", (api) => {
  if (process.env.NODE_ENV === "production") {
    amplitude.getInstance().init(globalWindow.AMPLITUDE_PROD_API_KEY);
  } else {
    amplitude.getInstance().init(globalWindow.AMPLITUDE_DEV_API_KEY);
  }

  api.on(STORY_CHANGED, () => {
    const { path } = api.getUrlState();
    const parsedPath = parsePath(path);
    /**
     * When a user switches to a new page, emit an event to Amplitude
     *
     * example event: {event_type: "viewed documentation", event_properties: {category: 'variants', page: "secondarybuttongroup"}}
     */
    amplitude.getInstance().logEvent(`viewed documentation`, {
      category: `${parsedPath.category?.split("-")[0]}`,
      page: parsedPath.page,
    });
  });

  api.on(STORY_ARGS_UPDATED, () => {
    const { path } = api.getUrlState();
    const parsedPath = parsePath(path);
    /**
     * When a user changes a story's args, emit an event to Amplitude
     *
     * example event: {event_type: "updated story args", event_properties: {category: 'variants', page: "secondarybuttongroup"}}
     */
    amplitude.getInstance().logEvent(`updated story args`, {
      category: parsedPath.category?.split("-")[0],
      page: parsedPath.page,
    });
  });
});
