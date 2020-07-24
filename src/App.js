import React from 'react';
import produce from 'immer';

import {generateBoard, checkSolution} from './lib/sudoku';
import SudokuBoard from './components/SudokuBoard';
import './App.css';

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
