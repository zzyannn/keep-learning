// 实现一个迭代器
// function createIterator(items) {
//   let i = 0;
//   return {
//     next: function() {
//       let done = (i >= items.length)
//       let value = !done ? items[i++] : undefined
//       return {
//         done,
//         value
//       }
//     }
//   }
// }

// let iterator = createIterator([1, 2, 3])

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 访问默认迭代器
// let values = [1, 2, 3]
// let iterator = values[Symbol.iterator]()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* generatorFn() {
  console.log(yield* [1, 2, 3])
}

console.log('value', generatorFn().next())
console.log('value', generatorFn().next())
console.log('value', generatorFn()[2])