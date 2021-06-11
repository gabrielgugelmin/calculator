import { useState } from 'react';
import { sum } from './helpers/calculator'
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null)

  const submitHandler = e => {
    e.preventDefault();
    setResult(sum(number1, number2));

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

        {
          result && (
            <p>Resultado: {result}</p>
          )
        }
      </form>
    </div>
  );
}

export default App;
