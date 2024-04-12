function PersonMaker(name, age) {
  const person = {
    name,
    age,
    talk: function () {
      console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
    },
  };
  return person;
}

let p1 = PersonMaker("Ghayoor", 100);
p1.talk();
