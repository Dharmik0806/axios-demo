import logo from './logo.svg';
import './App.css';
import SigninForm from './container/SigninForm';
import { configerStore } from './redux/store';
import { Provider } from 'react-redux'

function App() {

  let store = configerStore()
  return (
    <>
      <Provider store={store}>
        <SigninForm />
      </Provider>
    </>
  );
}

export default App;
