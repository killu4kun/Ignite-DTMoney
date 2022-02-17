import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';

interface IModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: IModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' className='react-modal-close'>
        <img src={closeSVG} alt='close' onClick={onRequestClose} />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder='Título'></input>
        <input type='number' placeholder='Valor'></input>
        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeSVG} alt='entrada'></img>
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeSVG} alt='saida'></img>
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder='Categoria'></input>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
