// ContadorEnergia.js
import React, { useState } from 'react';
import contadorImagem from './contador.png';

const ContadorEnergia = () => {
  const [consumoEnergia, setConsumoEnergia] = useState(0);

  const incrementarConsumo = () => {
    setConsumoEnergia(consumoEnergia + 1);
  };

  const decrementarConsumo = () => {
    if (consumoEnergia > 0) {
      setConsumoEnergia(consumoEnergia - 1);
    }
  };

  return (
    <div style={styles.contadorContainer}>
      <img src={contadorImagem} alt="Contador de Energia" style={styles.imagemContador} />
      <h2 style={styles.textoContador}>Consumo de Energia Atual: {consumoEnergia}</h2>
      <button style={styles.botao} onClick={incrementarConsumo}>Incrementar</button>
      <button style={styles.botao} onClick={decrementarConsumo}>Decrementar</button>
    </div>
  );
};

const styles = {
  contadorContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  imagemContador: {
    width: '150px',
    marginBottom: '20px',
  },
  textoContador: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  botao: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
};

export default ContadorEnergia;
