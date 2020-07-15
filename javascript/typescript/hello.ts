/*function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user: string = '123';
console.log(sayHello(user))

let val = 'name'
console.log(9, val)*/
/**
 * 数组
 */
//let fibonacci: number[] = [1, 1, 2, 3, 5];
/**********************数组泛型***********************/
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
//它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
function createCusArray<T>(length:number, val: T ):Array<T> {
    let arr:T[] = []
    for(let i=0;i<length;i++){
        arr.push(val)
    }
    return arr
}
console.log(createCusArray(10, '1'))
