const log: string = "Hello world";

console.log(log);

function Foo() {
  this.a = 1;
}
Foo.prototype.b = 1;
Foo.c = function () {};

var map = new Map();
map.set("a", 1);
map.set("b", 2);

var set = new Set();
set.add(1);
set.add(2);

var objects = {
  // "`arguments` objects": arguments,
  arrays: ["a", ""],
  "array-like objects": { "0": "a", length: 1 },
  booleans: false,
  "boolean objects": Object(false),
  "date objects": new Date(),
  "Foo instances": new Foo(),
  objects: { a: 0, b: 1, c: 2 },
  "objects with object values": { a: /a/, b: ["B"], c: { C: 1 } },
  // "objects from another document": realm.object || {},
  maps: map,
  "null values": null,
  numbers: 0,
  "number objects": Object(0),
  regexes: /a/gim,
  sets: set,
  strings: "a",
  "string objects": Object("a"),
  "undefined values": undefined,
};
