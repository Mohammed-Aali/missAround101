{
  let position = {
    x: 10,
    y: 20,
    print: function() {
      console.log(`X: ${this.x}, Y: ${this.y}`)
    },
    myObject: {sweet: "hello"}
  }

  function print() {
    "use strict";
    console.log(this)
  }

  print()
  position.print()
}