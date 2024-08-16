import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { produto } = React.useContext(GlobalContext);

  if (produto === null) return null;

  return (
    <div>
      Produto:{" "}
      {produto.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}{" "}
    </div>
  );
};

export default Produto;
