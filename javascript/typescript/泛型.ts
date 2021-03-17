//泛型
function createArray(length: number, value:any):Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result
}

const res: string[] = createArray(3, 'x')
console.log(res)