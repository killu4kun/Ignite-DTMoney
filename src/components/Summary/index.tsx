import React from 'react';
import { Container } from './styles';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSVG} alt='income'></img>
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeSVG} alt='saidas'></img>
        </header>
        <strong>R$1200</strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalSVG} alt='total'></img>
        </header>
        <strong>R$200</strong>
      </div>
    </Container>
  );
}
