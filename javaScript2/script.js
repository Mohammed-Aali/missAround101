{
  // the value of this to the arrow function depends on where it was originally created 
  let arrow = () => this;
  function normal() {
    return this;
  }
  console.log(normal())
  console.log(arrow())

  let functions = {
    arrow: arrow,
    normal: normal,
    arrowTest: () => this
  }
  console.log(functions.arrow())
  console.log(functions.normal())
  console.log(functions.arrowTest())
}