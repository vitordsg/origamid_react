import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
    { nome: "Fritadeira", propriedades: ["600watts", "Bivolt"] },
    { nome: "Monitor Samsung", propriedades: ["55 Polegadas", "QLED"] },
  ];
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
}

export default Produtos;
