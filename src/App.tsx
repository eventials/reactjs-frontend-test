import { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route } from 'react-router-dom';
import { NewPlayerModal } from './components/NewPlayerModal';
import { PlayersProvider } from './PlayersContext';
import { Login } from './routes/Login/index';
import { Room } from './routes/Room/index';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  const [isNewPlayerModalOpen, setIsNewPlayerModalOpen] = useState(false);

  function handleOpenNewPlayerModal() {
    setIsNewPlayerModalOpen(true);
  }

  function handleCloseNewPlayerModal() {
    setIsNewPlayerModalOpen(false);
  }
  
  return (
    <PlayersProvider>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route 
          path="/room" 
          component={
            () => <Room onOpenNewPlayerModal={handleOpenNewPlayerModal} />
          } 
        />
      </BrowserRouter>
      
      <NewPlayerModal 
        isOpen={isNewPlayerModalOpen}
        handleCloseNewPlayerModal={handleCloseNewPlayerModal}
      />
      
      <GlobalStyle />
    </PlayersProvider>
  );
}