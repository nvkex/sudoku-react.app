import React from 'react';
import SudokuField from './SudokuField';

export default class SudokuBoard extends React.Component{
    render(){
        const {board} = this.props;
        return(
            <div>
                {board.rows.map((row) => 
                    <div className = "row" key = {row.index}>
                        {row.cols.map((field) => <SudokuField field={field} key={field.col} />)}
                    </div>
                )}
            </div>
        );
    }
}