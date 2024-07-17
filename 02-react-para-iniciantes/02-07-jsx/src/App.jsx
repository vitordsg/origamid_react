/* eslint-disable no-constant-condition */
import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "Vitor Santos " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {titulo}
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
      <p style={estiloP}>{mostrarNome("Gonçalves")}</p>
      <p>
        {true ? "True" : "False"} - {10}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
    </>
  );
};

export default App;
