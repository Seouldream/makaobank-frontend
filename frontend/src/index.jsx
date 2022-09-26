import ReactDOM from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render((
  <MemoryRouter>
    <App />
  </MemoryRouter>
));
