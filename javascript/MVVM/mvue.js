//观察者
class Compile {
  constructor(el, vm) {
    this.el = document.querySelector(el)
    this.vm = vm
    //1、获取文档碎片对象， 放入内存中会减少页面的回流和重绘
    const fragment = this.getFragment(this.el)
    
  }
  getFragment(el) {
    //创建文档碎片
    const f = document.createDocumentFragment()
    console.log(14, f)
  }
}


class MVvue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data

    if(this.$el){
      //1、实现一个数据观察者 Compile
      //2、实现一个指令解析器
      new Compile(this.$el, this)
    }

  }
}