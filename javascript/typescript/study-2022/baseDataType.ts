// 基本类型
let str: string = 'lfz'
let num: number = 123
let bool: boolean = false
let obj: object = {}
let u: undefined = undefined
let n: null = null
const fn = () => {

}
/**********************其它类型***********************/
// 数组
let arr_1: string[] = ['1', '2', '3']

let arr_2: number[] = [1, 2, 3]
let arr_3 = [1, 2, 3]

// 接口
interface Person {
  name: string,
  age: number,
}


let arr_4: Person[] = [{name: 'a', age: 123}]
// 函数
const sum = (x: number, y: number): number => {
  return x + y
}

/**********************函数***********************/
function buildName(firstName: string, lastName?: string): string {
  // return firstName + (lastName ? lastName : ' ') as string
  return firstName + (lastName || '')
}

const names: string = buildName('a')

console.log(36, names)

/**********************玩一个交集***********************/
interface ArrayPerson {
  readonly id?: number,
  name: string,
  age?: number
}

let arr1: ArrayPerson[] = [{id: 1, name: '张三',}, {id: 2, name: '李四'}]
let arr2: ArrayPerson[] = [
  {name: "张三", age: 18},
  {name: "王五", age: 20},
]
//arr3 = [{ id: 1, name: "张三" ,age:18}]

const arr3 = arr1.reduce((prev: ArrayPerson[], item_1: ArrayPerson) => {
  const sameObj: ArrayPerson | undefined = arr2.find(item_2 => item_2.name === item_1.name)
  if (sameObj) {
    prev.push({
      ...item_1,
      ...sameObj
    })
  }
  return prev
}, [])

// console.log(arr3)

/**********************重载***********************/
type Combinable = string | number

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(x: Combinable, y: Combinable) {
  if (typeof x === 'string' || typeof y === 'string') {
    return x.toString() + y.toString()
  }
  return x + y
}

const res = add('aa', 'bb')

res.split('')

{
  /**********************元祖***********************/
  // 注意，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访
  // 问会提示错误。如果一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]
  console.log('xxxx')
}

{
  /**********************type***********************/
  type A = {
    valueA: 'a',
    propForA: string
  }
  type B = {
    valueB: 'b',
    propForB: number
  }
  type C = A & B
  const c: C = {
    valueA: 'a',
    propForA: 'asd',
    valueB: 'b',
    propForB: 2
  }
}

{
  /**********************interface***********************/
  type Dog = 'dog'
  type Cat = 'cat'
  interface User {
    readonly id: number
    name: string
    age?: number
  }
  interface UserWithDog extends User{
    dog: Dog
  }
  // 泛型， T理解为类型变量
  interface UserWithPet<T> extends User{
    pet: T
  }
  const userDog:UserWithDog  = {
    id: 1,
    name: 'aaa',
    dog: 'dog'
  }
  const userWidthCat: UserWithPet<Cat> = {
    id: 1,
    name: 'lfz',
    pet: 'cat'
  }
}
