import { Container, Content } from './styles';
import logoSVG from '../../assets/logo.svg';

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoSVG} alt='dt money' />
        <button type='button' onClick={onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
