import { window as globalWindow } from "global";
import { parsePath } from "../parsePath";

import * as amplitude from "@amplitude/analytics-browser";

interface StorybookAPI {
  on: (event: string, callback: () => void) => void;
  getUrlState: () => { path: string };
}

// In Storybook 8, addons is available globally
declare const addons: {
  register: (id: string, callback: (api: StorybookAPI) => void) => void;
};

addons.register("storybook/amplitude", (api: StorybookAPI) => {
  if (process.env.NODE_ENV === "production") {
    amplitude.init(
      globalWindow.AMPLITUDE_PROD_API_KEY,
      null,
      globalWindow.AMPLITUDE_OPTIONS
    );
  } else {
    amplitude.init(
      globalWindow.AMPLITUDE_DEV_API_KEY,
      null,
      globalWindow.AMPLITUDE_OPTIONS
    );
  }

  api.on("STORY_CHANGED", () => {
    const { path } = api.getUrlState();
    const parsedPath = parsePath(path);
    /**
     * When a user switches to a new page, emit an event to Amplitude
     *
     * example event: {event_type: "viewed documentation", event_properties: {category: 'variants', page: "secondarybuttongroup"}}
     */
    amplitude.track("viewed documentation", {
      category: parsedPath.category?.split("-")[0],
      page: parsedPath.page,
    });
  });

  api.on("STORY_ARGS_UPDATED", () => {
    const { path } = api.getUrlState();
    const parsedPath = parsePath(path);
    /**
     * When a user changes a story's args, emit an event to Amplitude
     *
     * example event: {event_type: "updated story args", event_properties: {category: 'variants', page: "secondarybuttongroup"}}
     */
    amplitude.track("updated story args", {
      category: parsedPath.category?.split("-")[0],
      page: parsedPath.page,
    });
  });
});
