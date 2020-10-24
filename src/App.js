import { useSelector } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo';
import ListOfTodo from './components/ListOfTodo';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      {user.auth ? <butto>Loggout</butto> : <button>login</button>}
      <h1>Welcomeback to daily web coding</h1>
      <AddTodo />
      <ListOfTodo />
    </div>
  );
}

export default App;
