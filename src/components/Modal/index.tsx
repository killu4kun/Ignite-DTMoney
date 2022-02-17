import { FormEvent, useState, } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface IModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: IModal) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState<string>('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, amount, type, category });
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

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
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder='Título'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        ></input>
        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={({ target }) => setAmount(+target.value)}
        ></input>
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeSVG} alt='entrada'></img>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeSVG} alt='saida'></img>
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder='Categoria'
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        ></input>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
