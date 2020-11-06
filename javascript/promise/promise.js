/**
 * promise
 * 状态
 * 1、pending 等待态
 * 2、fulfilled 执行态
 * 3、rejected 拒绝态
 */

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({test: 1})
    resolve({test: 2})
    //reject({test: 2})
  }, 1000)
})
  .then((data) => {
    console.log('result1', data)
  })
  .then(data=>{
    console.log('resulte2', data)
  })

//result1 { test: 1 }
//result3 undefined
