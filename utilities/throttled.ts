const throttled = (fn: Function, delay = 500) => {
  let timer: any = null;
  let starttime = Date.now();

  return function () {
    let curtime = Date.now();
    let remaining = delay - (curtime - starttime);
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, args);
      starttime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
};
