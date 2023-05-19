export function defineStore<T>(fn: () => T): {
  localStore: () => T;
  globalStore: () => T;
} {
  let storeValue: any;
  const globalStore = () => (storeValue ??= fn());
  return { localStore: fn, globalStore };
}
