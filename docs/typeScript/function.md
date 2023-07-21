# 函数

定义一个函数

### 函数声明

```ts
function fullName(firstName: string, lastName: string): string {
  return firstName + lastName
}
```

形参里面参数的类型和数量都要和定义的时候一一对应，不能多也不能少

### 函数表达式

```ts
// 带function的表达式
const fullName1 = function (firstName: string, lastName: string): string {
  return firstName + lastName
}

// 箭头函数表达式
const fullName2 = (firstName: string, lastName: string): string => {
  return firstName + lastName
}

// 完整定义的带function的表达式
const fullName3: (firstName: string, lastName: string) => number = function (
  firstName: string,
  lastName: string
): string {
  return firstName + lastName
}

// 你也可以自己写一下完整定义的箭头函数表达式
```

这三种方法都可以定义一个函数，只不过 fullName3 才是完整的定义，使用函数表达式声明函数时，不光要写明函数的参数和返回类型，还要写被赋值的变量的参数和返回类型，不过我们用 fullName1 和 fullName2 也能成功，这是因为在赋值过程中 TS 帮你推导了一下类型

### 可选参数和参数默认值

```ts
// 可选参数必须放在必选参数后面
const myFun = function (str1: string, str2: string, end?: string): string {
  if (end) {
    return str1 + str2
  } else {
    str1 + str2 + end
  }
}

// 一旦参数有默认值，就会被识别为可选参数，但这种可以放必选参数前面
const myFun = function (first: string = "A0", str1: string, str2: string): string {
  if (end) {
    return str1 + str2
  } else {
    str1 + str2 + end
  }
}
```