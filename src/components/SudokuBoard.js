import React from 'react';
import SudokuField from './SudokuField';
import Timer from './Timer';
import Result from './Result';

export default class SudokuBoard extends React.Component{
    render(){
        const {board, onChange} = this.props;
        return(
            <div>
                {!board.solveTime && <Timer start={board.startTime} /> }
                {board.solveTime && <Result sudoku={board}/>}
                {board.rows.map((row) => 
                    <div className = "row" key = {row.index}>
                        {row.cols.map((field) => <SudokuField field={field} key={field.col} onChange={onChange}/>)}
                    </div>
                )}
            </div>
        );
    }
}