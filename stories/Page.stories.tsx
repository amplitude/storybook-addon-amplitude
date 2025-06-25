import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Layouts/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['docsPage'],
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {},
};

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
