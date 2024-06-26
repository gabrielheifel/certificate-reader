/**
 * An array of routes that are accessible to the public
 * These routs don't require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = [
  "/",
  // "/app",
  // "/app/settings",
];

/**
 * An array of routes that are user for authentication
 * These routs will readirect logged in users to /settings
 * @type {string[]}
 */

export const authRouts: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefiz are user for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

export const apiPrefix: string = "/api";

/**
 * the default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = "/app";