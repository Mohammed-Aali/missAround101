{
  let arrow = () => this;
  function normal() {
    return this;
  }
  console.log(normal())
  console.log(arrow())
}