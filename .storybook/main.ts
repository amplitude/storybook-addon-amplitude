import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    {
      name: "@amplitude/storybook-addon-amplitude",
      options: {
        // Addon options can go here
      },
    },
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // Storybook 9 specific configurations
  typescript: {
    check: false, // Disable type checking during build for faster builds
  },

  viteFinal: async (config) => {
    // Add any Vite-specific configurations here
    return config;
  },
};

export default config;
