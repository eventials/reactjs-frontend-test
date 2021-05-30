import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './routes/Login';
import { Room } from './routes/Room';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/room" component={Room} />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}