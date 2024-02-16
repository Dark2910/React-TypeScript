import './App.css'
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  type ButtonsLayout = (number | string)[][];
  type row = (number | string)[];
  type ValueKey = '=' | 'clear';

  const[input, setInput] = useState('');

  const operation = (value: number | string): void => {
    setInput(String(input + value));
  }  
  const result = (): void => {
    setInput(String(evaluate(input)));
  }
  const clearScreen = (): void => {
    setInput('');
  }

  const handleClick = (value: number | string): void => {
    interface ValueOptions {
      '=': () => void,
      'clear': () => void,
    }

    const valueOptions: ValueOptions = {
      '=': () => result(),
      'clear': () => clearScreen(),
    }

    const valueDefault = (): void => operation(value);

    const key = value as ValueKey;
    (valueOptions[key] || valueDefault)();
  }

  const buttonsLayout : ButtonsLayout = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '+'],
    [0, '.', '=', '-'],
    ['clear']
  ];

  const renderButtons : JSX.Element[] = buttonsLayout.map((row: row, index: number) =>
    <div key={index} className='btn-container container p-0'>
      {row.map((value: number | string, index: number) => <Button key={index} onButtonClick={() => handleClick(value)} value={value}/>)}
    </div>
    );

  return (
    <div className='app'>
      <div className='calculator rounded-4'>
          <Screen input={input}/>
          {renderButtons}
      </div>
    </div>
    );
}

export default App
