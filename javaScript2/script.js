{
  let arrow = () => this;
  function normal() {
    return this;
  }
  console.log(normal())
  console.log(arrow())

  let functions = {
    arrow: arrow,
    normal: normal
  }
  console.log(functions.arrow())
  console.log(functions.normal())
}