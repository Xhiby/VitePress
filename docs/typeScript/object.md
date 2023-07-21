
# 对象

在 JS 中，我们一般这样声明一个对象

```js
let Person = {
  name: "wu",
  age: 24
}
```

思考一下，我们应该直接在 Person 后面声明类型吗，感觉不太对，对象里的每一个字段都是独立的，他们都应该有自己的类型，如果给对象的每个字段赋值类型呢，其实这已经很接近答案了

---

在 TS 中，我们声明对象的类型要更麻烦一点，因为对象里的每个字段都可能有自己的类型，首先我们需要声明一个接口 (**Interfaces**) ，接口定义了对象中每个字段的类型，就像这样

```ts
interface Person {
  name: string
  age: number
}
```

这样还没完，上面的 Person 只是接口，并不是对象，而且对象同样需要类型，大胆关联一下，接口其实就是对象的类型

```ts
let wu: Person = {
  name: "Wu",
  age: 24
}
```

另外一般的话接口和对象必须形状一致，就是里面的属性不能多也不能少，如果你想不一致可以使用可选属性

```ts
interface Person {
  name: string
  age?: number
}
// ?的意思是该属性是可选的，存不存在都不会报错
```

对象的属性我们也许无法保证全部都定义在接口里面，偶尔也许会有意外的属性出现，这时需要定义一个任意属性

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: any
}
```

[propName: string]: any 这里的 string 表示对象属性的键可以是什么类型，这里只能是 string 或者 number 类型，末尾的 any 表示属性的值可以是什么类型，这里有一点非常重要**只要你在接口中定义了一个任意属性，那么接口中其他的所有属性的类型都必须是这个任意属性类型的子集**

可能有点绕口，拿上面的代码来说，name 和 age 的类型都必须为 propName 的 any 类型的子集，这里 string 和 number 当然是 any 的子集，所以不会报错，如果这里的 any 改为 string，那么就会报错，因为 number 不是 string 的子集，另外想当然一个接口肯定也只能定义一个任意属性，多个也没啥用，然后如果你不想把任意属性的类型声明为 any 的话，你可以把任意属性的类型声明为组合属性

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: string | number
}
```

然后就是只读属性

```ts
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: string | number
}
```

初始化之后就不能改了

> 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
> http://ts.xcatliu.com/basics/type-of-object-interfaces.html