function doSomething() {
  throw {error: "Its broke", code: -1}
}

doSomething();