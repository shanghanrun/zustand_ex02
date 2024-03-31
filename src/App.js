
import './App.css';
import Box from './components/Box';
import {useCount} from './store'

function App() {
  const {count, increment, decrement, login, reset} = useCount();
  function handleLogin(){
    console.log('로그인')
    login('myId', '1234')
  }

  return (
    <div className="App">
        <div>Count: {count}</div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <Box />
        <button onClick={handleLogin}>로그인</button>
        <button id='reset' onClick={reset}>리셋</button>
    </div>
  );
}

export default App;
