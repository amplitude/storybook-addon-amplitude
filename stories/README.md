# Test Stories for Amplitude Addon

This directory contains test stories to demonstrate and test the Amplitude Storybook addon functionality.

## Components

### Button

A simple button component with different variants (primary/secondary, small/medium/large) to test basic story interactions.

#### Stories

- Primary - Shows a primary button
- Secondary - Shows a secondary button
- Large - Shows a large button
- Small - Shows a small button

### Header

A header component with user authentication states to test more complex interactions.

#### Stories

- LoggedOut - Shows the header when no user is logged in
- LoggedIn - Shows the header when a user is logged in

### Page

A full page component that combines Header and other elements to test complex page-level tracking.

#### Stories

- LoggedOut - Shows the full page when no user is logged in
- LoggedIn - Shows the full page when a user is logged in

## Testing the Amplitude Addon

When you navigate between these stories, the Amplitude addon will automatically track:

1. Story Changes - When you switch between stories, it tracks "viewed documentation" events
2. Story Args Updates - When you modify story controls, it tracks "updated story args" events

## Environment Setup

### Amplitude API Keys (REQUIRED)

The `yarn storybook` process will automatically load your Amplitude API keys from an .env file in the root of this package. Either copy the example .env or add the keys manually to your own .env file.

**⚠️ Storybook will not start properly without API keys in your .env file!**

1. Get your API keys

   - Go to your Amplitude dashboard
   - Navigate to Settings > Projects > [Your Project] > API Keys (Note: Amplitude Employees should use the `Storybook Addon Demo` project)
   - Copy your API key for the appropriate environment

2. Copy the example configuration

   ```bash
   # Copy the example configuration
   cp .env.example .env
   ```

3. Add your Amplitude API keys to the `.env` file:

   ```bash
   # Open .env and replace with your actual keys
   AMPLITUDE_DEV_API_KEY=your-actual-dev-api-key
   AMPLITUDE_PROD_API_KEY=your-actual-prod-api-key
   ```

**Note**: If you don't have Amplitude API keys, you can:

- Sign up for a free Amplitude account at https://amplitude.com
- Use the same API key for both dev and prod environments during testing

## Running the Stories

```bash
# Start Storybook (automatically loads .env file)
yarn storybook

# Build Storybook (good for debugging Storybook configuration)
yarn build:storybook
```

## Expected Amplitude Events

The addon will send the following events to Amplitude:

- `viewed documentation` with properties:

  - `category`: The story category (e.g., "Example")
  - `page`: The story name (e.g., "Button", "Header", "Page")

- `updated story args` with properties:
  - `category`: The story category
  - `page`: The story name

## Configuration

The addon configuration is in `.storybook/preview.ts`:

- Environment variables are automatically loaded from `.env` file using dotenv-cli
- Vite configuration injects the variables into the browser environment
- Log Level: 4 (Verbose logging for testing)

## Security Notes

- Never commit your actual Amplitude API keys to version control
- The `.env` file is automatically ignored by git
- Use different API keys for development and production environments
