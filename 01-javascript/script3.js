// Fetch
// fetch("https://ranekapi.origamid.dev/json/api/produto")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// Async & Await
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos(
  "https://ranekapi.origamid.dev/json/api/produto"
);

console.log(produtos);

// Arrays (Map e Filter)
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];

const precosFiltro = precos.filter((p) => p.includes("R$"));
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);

console.log(precosFiltro);
console.log(precosNumeros);
console.log(precos);

// Expressões
const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log("Grupo A ganhou");
} else {
  console.log("Grupo B, ganhou");
}

const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";
console.log(vencedor)