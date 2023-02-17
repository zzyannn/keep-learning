// 函数重载签名
// function func(foo: number, bar: true): string;
// function func(foo: number, bar?: false): number;
// function func(foo: number, bar?: boolean): string | number {
//   if (bar) {
//     return String(foo);
//   } else {
//     return foo * 599;
//   }
// }

// const res1 = func(599); // number
// const res2 = func(599, true); // string
// const res3 = func(599, false); // number

// function universalAdd<T extends number | bigint | string>(
//   x: T,
//   y: T
// ): LiteralToPrimitive<T> {
//   return x + (y as any);
// }

// universalAdd(1, 2);

// export type LiteralToPrimitive<T> = T extends number
//   ? number
//   : T extends bigint
//   ? bigint
//   : T extends string
//   ? string
//   : never;

// type ExtractStartAndEnd<T extends any[]> = T extends [
//   infer Start,
//   ...any[],
//   infer End
// ]
//   ? [Start, End]
//   : T;

// type res4 = ExtractStartAndEnd<[1, 2, 3, 4, 5]>;

// type SwapStartAndEnd<T extends any[]> = T extends [
//   infer Start,
//   ...infer Left,
//   infer End
// ]
//   ? [End, ...Left, Start]
//   : T;

// type res5 = SwapStartAndEnd<[1, 2, 3, 4, 5]>;

type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<
  infer K,
  infer V
>
  ? Record<V & string, K>
  : never;

type res6 = ReverseKeyValue<{ key: "value" }>;

type IsNever<T> = [T] extends [never] ? true : false;

type res7 = IsNever<any>;
