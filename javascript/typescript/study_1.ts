interface Article {
    title: string;
    count: number;
    content: string;
    tags: string[]; // 数组里的元素都是字符串
}

const book: Article = {
    title: 'js',
    count: 12,
    content: '123456',
    tags: ['a', 'b']
}

let n: number | string;
for (let i = 0; i < 10; i++) {
    if (i <= 5) n = 10;
    else n = '100';
}

interface setUser {
    (name:string, age:number): void
}
/**********************泛型***********************/
//1
function identity<T>(arg: T){
  return arg
}
const res = identity<number>(1)
//2
interface Array<T> {
  length: number
  toString(): string
  pop(): T
  reverse(): T[]
  sort(compareFn?: (a: T, b: T) => number): this
}
const nums = Array<number>(1,2,3)

const strings = Array<string>('1','2','3')
console.log(41, strings)

/**********************interface 定义函数***********************/
interface Fn{
  fnTest: (index: number)=>void
}
const fnTest = {
  fnTest: function (index){
    console.log('aaa')
  }
}