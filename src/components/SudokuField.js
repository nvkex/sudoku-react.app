import React from 'react';

export default class SudokuField extends React.Component{
    render(){
        const {field} = this.props;
        return(
            <input className="field" value={field.value || ""} readOnly={field.readOnly}/>
        );
    }
}