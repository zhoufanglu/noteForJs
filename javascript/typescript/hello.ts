/**********************原始数据类型***********************/
//* 编译成js `tsc demo.ts`
//* 执行 `ts-node demo.ts` 执行 demo.ts 内代码

let isDone: boolean = false
/**
 * 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，
 * 而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。
 */
//let boo: boolean = new Boolean(1)
//console.log(boo) 不能用new的方法来定义
//字符串
let s1: string = 'abc'
let s2: string = `${s1}def`
//空
let unusable: void = undefined
let unusable2: void = null
//function
function foo(): void {
    console.log('我不返回东西，所以是void')
}
//foo()
/**********************类型推论***********************/
//如果类型声明的时候被赋值了，就会默认是什么类型， 如果没有赋值，他就是any类型
let a
a = 1
a = 'a'

//联合类型333
function getLength(something: string|number):number {
    return String(something).length
}
//console.log(getLength(32223))

/**********************接口***********************/
interface Person {
    name: string,
    age?: number
}

let person: Person = {
    name: 'lfz',
    age: 12
}
//添加任意属性
interface Person2 {
    name: string,
    age?: number,
    [propName: string]: string | number
}
let tom: Person2 = {
    name: 'lfz',
    age: 11,
    gender: 'male'
}

//函数类型接口
//有索引的类型
interface IndexArray{
    [index:number]: string
}
let array:IndexArray = ['1', '2']


/**********************array*********斐波纳契**************/
let fibonacci: number[] = [1,2,3]
let fibonacci2: any[] = [1,'2',{name:'a'}]
/**********************函数***********************/
function foo2(x: number, y: number):number {
    //console.log( x + y)
    return x+y
}
foo2(1,2)

let foo3 = (x:number, y:number):number=>{
    return x-y
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;


interface LabelledValue {
    label: string;
}

/*
function printLabel(labelledObj: LabelledValue):LabelledValue {
    console.log(labelledObj)
    return labelledObj
}

let myObj = {size: 10, label: "Size 10 Object"}
printLabel(myObj);*/

/**********************类型断言***********************/
interface Cat {
    name: string,
    run(): void
}
interface Fish {
    name: string,
    swim(): void
}

function getName(animal: Cat| Fish):Cat|Fish {
    return animal
}
const cat:Cat = {
    name: 'cat',
    run() {
        console.log('cat run')
    }
}

//console.log(119, getName(cat))
function isFish(animate: Cat | Fish) {
    console.log(121, typeof (animate as Fish).swim)
    if(animate.name==='fish') {
        return true
    }else
        return false
}
console.log(126, isFish(cat))