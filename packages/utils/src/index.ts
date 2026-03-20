import { chunk } from 'lodash-es';

export const isFunction = (val: object) => {
  return typeof val === "function";
};

export function setChunk(arr: any[], size: number) {
  return chunk(arr, size)
}

