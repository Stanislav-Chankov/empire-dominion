export function createApiRequestId(prefix = 'op'): string {
  // Prefer UUID when available.
  const uuid = globalThis.crypto?.randomUUID?.();
  if (uuid) return `${prefix}_${uuid}`;

  // Fallback: timestamp + random.
  const rand = Math.random().toString(16).slice(2);
  return `${prefix}_${Date.now()}_${rand}`;
}


