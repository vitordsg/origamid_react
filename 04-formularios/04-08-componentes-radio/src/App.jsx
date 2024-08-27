import React from "react";
import Input from "./Form/input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("Vermelho");
  const [frutas, setFrutas] = React.useState("Vermelho");

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={["Limão", "Laranja", "Uva"]} value={frutas} setValue={setFrutas} />

      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
