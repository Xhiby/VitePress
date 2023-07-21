# 数组

声明一个数组

```ts
// 感觉和声明数值类型的变量没什么区别
let numberArr: number = [1, 2, 3]

// 下面这种更明显一点，这种叫泛型
let strArr: Array<string> = ["A", "B", "C"]
```

我们在 JS 中，数组里的元素可以是任意类型，但在 TS 中，声明的数组是什么类型，元素就只能是什么类型

### 类数组

熟悉 JS 的都知道，在 JS 中有一种和数组非常类似的类型，它们可以使用 length 属性，可以 for in 或者 for of 遍历，甚至可以用[索引]访问，虽然和数组有点类似，但他们其实是对象，只不过属性的键是从 0 开始的数字而已，对这种类数组类型的变量，我们需要通过定义接口来访问。

```ts
interface Arguments {
  [index: number]: any
  length: number
  callee: Function
}
```

另外TS中有很多像上面这种Arguments的接口已经定义好了，我们直接使用就可以了


