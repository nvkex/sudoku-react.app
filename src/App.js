import React from 'react';
import generator from 'sudoku';
import produce from 'immer';

import SudokuBoard from './components/SudokuBoard';
import './App.css';


function generateBoard() {
  const raw = generator.makepuzzle();
  const rawSolution = generator.solvepuzzle(raw);

  const formatted = raw.map(e => e=== null? null:e+1);
  const formattedSolution = rawSolution.map(e => e+1);

  const result = { 
    rows: [], 
    solution:formattedSolution,
    startTime: new Date(),
    solveTime: null
  };


  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
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

function checkSolution(sudoku){
  const candidate = sudoku.rows.map( (row) => row.cols.map((col) => col.value)).flat();
  for(let i =0; i< candidate.length; i++){
    if(candidate[i] === null || candidate[i] !== sudoku.solution[i]){
      return false;
    }
  }

  return true;
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = produce({},
      () => ({
        sudoku: generateBoard()
      })
    )
  }

  solveSudoku = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows.forEach( (row) => 
          row.cols.forEach( (col) => {
            col.value = state.sudoku.solution[col.row*9 + col.col];
        }))
      })
    )
  }

  handleChange = e => {
    this.setState(
      produce((state) => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        if(!state.sudoku.solveTime){
          const solved = checkSolution(state.sudoku);
          if(solved){
            state.sudoku.solveTime = new Date();
          }
        }
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku</h1>
        </header>
        <SudokuBoard board={this.state.sudoku} onChange={this.handleChange} />
        <button onClick ={this.solveSudoku}>Solve</button>
      </div>
    );
  }

}

export default App;
