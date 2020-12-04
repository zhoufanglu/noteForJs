const address = require("address")
const defaultGateway = require('default-gateway')
const result = defaultGateway.v4.sync()
const ip = address.ip(result && result.interface)
console.log(ip) //ip函数不传参数时，和传入参数获取的ip值不一样，切传入参数后获取的 ip才是局域网可访问的。