function duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound)};
}
console.log(typeof duck());
let toy = new duck("quack quack");

toy.quack();

console.log(typeof null);
console.log(toy instanceof duck);