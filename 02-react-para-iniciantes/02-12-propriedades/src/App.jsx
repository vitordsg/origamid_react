import React from "react";
import Form from "./Form/Form";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <div>
        <Titulo cor="red" texto="Meu titulo 1">
          Isso e o children
          <p>Teste</p>
        </Titulo>
        <Titulo cor="blue" texto="Meu titulo 2" />
        <Titulo cor="yellow" texto="Meu titulo 3" />
      </div>

      <div>
        <Form />
      </div>
    </>
  );
};

export default App;
