{
  // the value of this to the arrow function depends on where it was originally created 
  let arrow = () => this;
  function normal() {
    return this;
  }
  console.log(normal())
  console.log(arrow())

  let functions = {
    this: this,
    arrow: arrow,
    normal: normal,
    arrowTest: () => this
  }
  console.log(functions.arrow())
  console.log(functions.normal())
  // returns the window object
  console.log(functions.arrowTest())
}