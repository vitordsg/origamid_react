// Objeto Literal
const menu = {
  seletor: ".principal",
};
console.log(menu.seletor.toUpperCase());

// Arrow Function
const upperName = (name) => name.toUpperCase();
console.log(upperName("vitor"));

// Destructuring objetos e Arrays
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.addEventListener("click", handleMouse);

const frutas = ["banana", "uva"];
const [frutas1, frutas2] = frutas;
console.log(frutas1, frutas2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// Rest e Spread
function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList("Google", ["Vitor", "Santos"]);

const numeros = [10, 5, 6, 89, 100, 201];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [...numeros, 32, 33, 45, 50];
console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};

carroAno = {
  ...carro,
  ano: 2008,
};
console.log(carro);
