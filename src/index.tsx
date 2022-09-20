import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchQuestsListAction } from './store/api-action';

store.dispatch(fetchQuestsListAction());

render(
  <StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
