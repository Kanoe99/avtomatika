export const publicRoutes = ["/", "/auth/new-verification"];

//this will redirect to /settings
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

export const apiAuthPrefix = "/api/auth";

//default redirect after logging in
export const DEFAULT_LOGIN_REDIRECT = "/";
