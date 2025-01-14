export type Details<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
