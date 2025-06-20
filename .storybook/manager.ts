declare global {
  interface Window {
    AMPLITUDE_DEV_API_KEY: string;
    AMPLITUDE_PROD_API_KEY: string;
    AMPLITUDE_OPTIONS?: Record<string, unknown>;
  }
}

window.AMPLITUDE_DEV_API_KEY = process.env.AMPLITUDE_DEV_API_KEY || 'test-dev-api-key';
window.AMPLITUDE_PROD_API_KEY = process.env.AMPLITUDE_PROD_API_KEY || 'test-prod-api-key';
window.AMPLITUDE_OPTIONS = {
    logLevel: 4, // Verbose logging for testing
};

// Export to make this a module
export {};
