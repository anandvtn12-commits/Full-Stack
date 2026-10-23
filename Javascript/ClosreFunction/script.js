function Greetings(name) {
  return function () {
    console.log("Welcome Home!!!", name);
  };
}

const greetSwati = Greetings("Swati");
const greetRoshni = Greetings("Roshni");

greetSwati();
greetRoshni();