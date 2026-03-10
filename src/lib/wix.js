// Import the Wix SDK tools we need.
// createClient() makes the main Wix client object.
// OAuthStrategy() tells the client how to authenticate.
import { createClient, OAuthStrategy } from "@wix/sdk";

// Import the Wix Data module for working with CMS/data collection items.
// "items" is the module we will use later to query your Service Cards collection.
import { items } from "@wix/data";

// Create and export a reusable Wix client for this project.
// Exporting it lets other files import and use the same client.
export const wixClient = createClient({
  // Register the Wix modules this client should have access to.
  // Right now we only need the "items" module for CMS collection data.
  modules: { items },

  // Set up authentication for the client.
  auth: OAuthStrategy({
    // Pull your Wix Headless Client ID from the .env file.
    // In Astro, server-side environment variables are accessed with import.meta.env.
    clientId: import.meta.env.WIX_CLIENT_ID,
  }),
});