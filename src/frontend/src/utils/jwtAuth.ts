/**
 * Frontend-only JWT-style authentication utility.
 * Uses base64-encoded JSON payload with a simple integrity signature.
 * NOT a cryptographically secure JWT — suitable for client-side session management only.
 */

const TOKEN_KEY = "cc_jwt_token";
const TOKEN_LIFETIME_SECONDS = 24 * 60 * 60; // 24 hours

export interface JwtPayload {
  userId: string;
  email: string;
  username: string;
  iat: number; // issued at (Unix seconds)
  exp: number; // expires at (Unix seconds)
}

/** Simple checksum to detect tampering (not cryptographic) */
function signPayload(payload: JwtPayload): string {
  const str = `${payload.userId}:${payload.email}:${payload.iat}:${payload.exp}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function base64url(str: string): string {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function decodeBase64url(str: string): string {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const padding =
    padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  return decodeURIComponent(escape(atob(padded + padding)));
}

/**
 * Generate a JWT-style token for a user and store it in localStorage.
 */
export function generateToken(user: {
  deviceId: string;
  email: string;
  username: string;
}): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: JwtPayload = {
    userId: user.deviceId || `user_${Date.now()}`,
    email: user.email,
    username: user.username,
    iat: now,
    exp: now + TOKEN_LIFETIME_SECONDS,
  };

  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = base64url(JSON.stringify(payload));
  const sig = base64url(signPayload(payload));

  const token = `${header}.${body}.${sig}`;
  localStorage.setItem(TOKEN_KEY, token);
  return token;
}

/**
 * Validate a JWT token string. Returns decoded payload if valid and not expired, null otherwise.
 */
export function validateToken(token: string): JwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const payload: JwtPayload = JSON.parse(decodeBase64url(parts[1]));
    const expectedSig = base64url(signPayload(payload));

    if (parts[2] !== expectedSig) return null;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) return null;

    return payload;
  } catch {
    return null;
  }
}

/** Retrieve raw token string from localStorage */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

/** Remove token from localStorage (logout) */
export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

/** Check whether a valid, non-expired token exists */
export function isAuthenticated(): boolean {
  const token = getToken();
  if (!token) return false;
  return validateToken(token) !== null;
}

/**
 * Check if a token exists but is expired.
 * Useful to show "session expired" message.
 */
export function isTokenExpired(): boolean {
  const token = getToken();
  if (!token) return false;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;
    const payload: JwtPayload = JSON.parse(decodeBase64url(parts[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return false;
  }
}
