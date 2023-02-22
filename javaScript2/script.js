function doSomething() {
  throw {error: "Its broke", code: -1}
}

try {
  doSomething();
} catch(error) {
  console.log(error);
} finally {
  console.log("wrapping things up... ");
} 