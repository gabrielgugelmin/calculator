import { useState } from 'react';
import { sum } from './calculator'
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const submitHandler = e => {
    e.preventDefault();
    const result = sum(number1, number2);
    console.log('result: ', result)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <input type="number" name="number1" placeholder="Insira o primeiro número" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        </div>

        <div>
          <input type="number" name="number2" placeholder="Insira o segundo número" value={number2} onChange={(e) => setNumber2(e.target.value)} />
        </div>

        <div>
          <button>somar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
