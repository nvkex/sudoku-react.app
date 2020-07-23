import React from 'react';
import generator from 'sudoku';

import SudokuBoard from './components/SudokuBoard';
import './App.css';


function generateBoard(){
  const raw = generator.makepuzzle();
  const result = {rows: []};

  for(let i = 0;i<9; i++){
    const row = {cols: [], index: i};
    for(let j = 0;j< 9;j++){
      const value = raw[i*9+j];
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: value !== null
      }
      row.cols.push(col);
    }
    result.rows.push(row);
  }

  return result;
}


class  App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sudoku: generateBoard()
    } 
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku</h1>
        </header>
        <SudokuBoard board={this.state.sudoku}/>
      </div>
    );
  }
  
}

export default App;
