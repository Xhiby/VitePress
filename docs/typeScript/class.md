# 类

说实话，类这个概念在大部分语言中都是很重要的，但不知道为什么，在 JS 中很难用到，许多时候在 JS 用到类的时候都是我们希望更好的定义代码，让其变得更好维护，但在当下大家都不写 class 的情况下，自己写类反而成了折磨，不过总而言之，我们还是来认识一下类吧

### ES6 中的类

因为类太少用到，还是先属性一下 JS 中类的定义吧

```js
// 定义
class Person {
  constructor(name) {
    this.name = name
  }
  hi() {
    return `name is ${name}`
  }
}

// 继承
class Wu extend Person {
  constructor(name) {
    super(name)
  }
  hi() {
    return `My` + super.hi()
  }

  // 读写事件
  get name(){
    return 'A' + this.name
  }
  set name(value){
    console.log('value: ', value);
  }

  // 静态方法直接通过类调用，不需要实例化
  static isName(name){
    return name?true:false
  }
}
```

## OK，下面是 TS 中的类

### 修饰符

```ts
class Person {
  // 公共的，跟JS直接声明是一样的
  public name

  // 私有的，只能在类内部访问
  private sex

  // 当构造函数是private时，类不允许继承或实例化
  private constructor(name) {
    this.name = name
  }

  // 受保护的，跟private的区别是在子类也能访问
  protected age

  // 当构造函数是protected时，类不允许实例化
  protected constructor(name) {
    this.name = name
  }

  // 只读
  readonly rank
}
```

### 参数属性技巧

```ts
class Animal {
  // public name: string;
  public constructor(public name) {
    // this.name = name;
  }
}
```

写 public name 就相当于写了注释的内容

### 抽象类和抽象方法

```ts
// 抽象类不允许实例化
abstract class Person {
  // 抽象方法
  public abstract hi() {
    console.log(`How are you?`)
  }
}

//抽象类里的抽象方法，继承的子类必须要写个一样的
class Cat extends Animal {
  public hi() {
    console.log(`Meow, My name is ${this.name}`)
  }
}
```
