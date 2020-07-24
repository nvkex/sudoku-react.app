import React from 'react';
import SudokuField from './SudokuField';

export default class SudokuBoard extends React.Component{
    render(){
        const {board, onChange} = this.props;
        return(
            <div>
                {board.solveTime && <h1>Whoohoo! You did it!</h1>}
                {board.rows.map((row) => 
                    <div className = "row" key = {row.index}>
                        {row.cols.map((field) => <SudokuField field={field} key={field.col} onChange={onChange}/>)}
                    </div>
                )}
            </div>
        );
    }
}