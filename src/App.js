import './App.css';
import List from './components/list';

function App() {
  return (
    <div className="App">
        <h1>Welcome to React</h1>
        <div>
          <label>Username</label>
          <input type="text"/>
          <label>Password</label>
          <input type="text"/>
          <button>Signup</button>
        </div>
        <List></List>
    </div>
  );
}

export default App;
