import { Container, Content } from './styles';

const logo = require('../../assets/logo.svg') as string;

export function Header() {
  return (
    <Container>
        <Content>
      <img src={logo} alt='dt money' />
      <button type='button'>Nova transação</button>
      </Content>
    </Container>
  );
}
