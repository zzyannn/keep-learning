const map = new Map();
map.set("a", 1);
map.set("b", 2);

const set = new Set();
set.add(1);
set.add(2);

const obj_a = {
  arr: [1, { a: 2, b: 3 }, 4],
  obj: { c: 123, d: { e: 321 } },
  func: new Function(),
  date: new Date(),
  regexp: new RegExp(/a/gim),
  u: undefined,
  n: null,
  boolean: true,
  numbers: 6,
  strings: "zzyannn",
  maps: map,
  sets: set,
};

/**
 * 浅拷贝的实现方式：
 * 1.Object.assign()
 * 2.函数库lodash的_.clone方法
 * 3.展开运算符 ...
 * 4.Array.prototype.concat()
 * 5.Array.prototype.slice()
 */

/**
 * 深拷贝的实现方式：
 * 1.JSON.parse(JSON.stringify())
 * 2.函数库lodash的_.cloneDeep方法
 * 3.jQuery.extend()方法
 * 4.手写递归方式
 */

/**
 * JSON深拷贝的缺陷：
 * 1.map、set、regexp 会变空对象 {}
 * 2.undefined、函数 会被去除
 * 3.date类型会变成字符串类型
 */
// const obj_b = JSON.parse(JSON.stringify(obj_a));

const deepClone = (target: any, hash = new WeakMap()) => {
  if (target === null) return target;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (typeof target !== "object") return target;
  if (hash.get(target)) return hash.get(target);

  let isArray = Array.isArray(target);
  let cloneTarget = isArray ? ([] as any[]) : ({} as Record<string, any>);

  hash.set(target, cloneTarget);

  const keys = isArray ? undefined : Object.keys(target);
  (keys || target).forEach((item: string, index: number) => {
    if (isArray) {
      cloneTarget[index] = deepClone(target[index], hash);
    } else if (!isArray && target.hasOwnProperty(item)) {
      cloneTarget[item] = deepClone(target[item], hash);
    }
  });

  return cloneTarget;
};

const obj_b = deepClone(obj_a);

obj_b.numbers = 99;
obj_b.arr[1] = { aaa: "123999" };

console.log(obj_a);
console.log(obj_b);
