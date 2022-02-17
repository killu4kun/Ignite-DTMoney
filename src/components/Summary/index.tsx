import { Container } from './styles';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'deposit':
          acc.deposits += transaction.amount;
          break;
        case 'withdraw':
          acc.withdraws += transaction.amount;
          break;
        default:
          break;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSVG} alt='income'></img>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(summary.deposits)}
          </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeSVG} alt='saidas'></img>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(summary.withdraws)}
          </strong>
      </div>
      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalSVG} alt='total'></img>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(summary.deposits-summary.withdraws)}
          </strong>
      </div>
    </Container>
  );
}
