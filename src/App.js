import './App.css';
import UserInfo from './components/UserInfo.js';
import Search from '../src/components/Search.js';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Search />
        <UserInfo />
      </Provider>
    </div>
  );
}

export default App;
