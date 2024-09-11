import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>vitinho6.6@hotmail.com</li>
          <li>(13) 99648-8428</li>
          <li>Rua Goitacazes, 250</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
