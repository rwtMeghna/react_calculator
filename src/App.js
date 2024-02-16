import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // const calculateResult = () => {
  //   try {
  //     const calculatedResult = eval(input);
  //     setResult(calculatedResult);
  //   } catch (error) {
  //     setResult('Error');
  //   }
  // };
  const calculateResult = () => {
    try {
      if (!input.trim()) {
        setResult('Error');
        return;
      }

      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div> {result && <div className="result">{result}</div>}</div>
      <div className="buttons">
        < div className="rows">
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('+')}>+</button>
        </div>
        < div className="rows">
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        </div>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('*')}>*</button>
        <div div className="rows">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
        </div>
      </div>
      {/* {result && <div className="result">{result}</div>} */}
    </div>
  );
}

export default App;
