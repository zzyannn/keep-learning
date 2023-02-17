let setTimeoutCallBack = function() {
  console.log('我是定时器回调');
};
let httpCallback = new Promise((resolve) => {
  setTimeout(() => {
    resolve('9999')
  }, 500)
})

// 同步任务
console.log('我是同步任务1');

// 异步定时任务
setTimeout(setTimeoutCallBack,1000);

// 异步http请求任务
httpCallback.then((res) => {
  console.log(res)
})

// 同步任务
console.log('我是同步任务2');