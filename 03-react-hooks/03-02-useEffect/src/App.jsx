import React from "react";
import Produto from "./Produto";

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>

      <div>
        {ativo && <Produto />}
        <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      </div>
    </>
  );
};

export default App;
