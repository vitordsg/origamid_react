import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(() => true);

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, "Item" + (contar + 1)]);
  }

  return (
    <>
      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>

      <div>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button onClick={handleClick}>{contar}</button>
      </div>
    </>
  );
};

export default App;
