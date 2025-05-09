export function patchUpdatedAt<T extends Record<string, any>>(item: T): T {
  return { ...item, updatedAt: new Date() };
}
