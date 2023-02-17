const getType = (target?: any) => {
  let type = typeof target;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString
    .call(target)
    .replace(/^\[object (\S+)\]$/, "$1");
};

console.log(getType([])); // "Array" typeof []是object，因此toString返回
console.log(getType("123")); // "string" typeof 直接返回
console.log(getType(null)); // "Null"首字母大写，typeof null是object，需toString来判断
console.log(getType(undefined)); // "undefined" typeof 直接返回
console.log(getType()); // "undefined" typeof 直接返回
console.log(getType(function () {})); // "function" typeof能判断，因此首字母小写
console.log(getType(/123/g));
