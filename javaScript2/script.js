let me = {
  name: "Mohammed",
  outputMe: function() {
    console.log(this)
    console.log(this.name)
  }
}

me.outputMe()