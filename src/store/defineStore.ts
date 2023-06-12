import type { Func } from ".";

export function defineStore<T>(fn: Func<T>): {
  localStore: Func<T>;
  globalStore: Func<T>;
} {
  let storeValue: any;
  const globalStore = () => (storeValue ??= fn());
  return { localStore: fn, globalStore };
}
