import logoImg from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

interface HeaderProps {
  onOpenModal: () => void;
};

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <Button type="button" onClick={onOpenModal}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
};