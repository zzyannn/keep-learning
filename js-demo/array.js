// const arr = ['apple', 'orange']
const arr = new Array(99999999)
const arr1 = { a: 1, b: 2 }

/**
 * 运行时间 短 -> 长
 * for < for...in < forEach < map < for...of
 */

console.log('========== for =========')

console.time('for')
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}
console.timeEnd('for')

console.log('========== for...of =========')

console.time('for...of')
for (let v of arr) {
  // console.log(v)
}
console.timeEnd('for...of')

console.log('========== for...in =========')

console.time('for...in')
for (let v in arr) {
  // console.log(arr[v])
}
console.timeEnd('for...in')

console.log('========== forEach =========')

console.time('forEach')
arr.forEach((item) => {
  // console.log(item)
})
console.timeEnd('forEach')

console.log('========== map =========')

console.time('map')
arr.map(item => {
  console.log(item)
})
console.timeEnd('map')
