export const isFunction = (val: object) => {
  return typeof val === "function";
};

// 判断是否为对象
export const isObject = (val: object) => {
  return val !== null && typeof val === "object";
};