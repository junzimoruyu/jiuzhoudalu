class mouseOptions {
  constructor(){
    this.a='ssssssss'
  }

  // btn(e){
  //   return e.buttons
  // }
  // altKey(e){
  //   return e.altKey
  // }
  client(e){ //点击位置距离当前body可视区域的x，y坐标
    return {
      x:e.clientX,
      y:e.clientY,
    }
  }
  page(e){ //对于整个页面来说，包括了被卷去的body部分的长度
    return {
      x:e.pageX,
      y:e.pageY,
    }
  }
  screen(e){ //点击位置距离当前电脑屏幕的x，y坐标
    return {
      x:e.screenX,
      y:e.screenY,
    }
  }
  offset(e){ //相对于带有定位的父盒子的x，y坐标
    return {
      x:e.offsetX,
      y:e.offsetY,
    }
  }

  domClientRect(e){
    return {
      left:e.left,
      top:e.top,
      right:e.right,
      bottom:e.bottom
    }
  }

}



export default new mouseOptions();
