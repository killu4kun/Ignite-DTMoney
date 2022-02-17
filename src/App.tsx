import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/Modal';

export function App() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
