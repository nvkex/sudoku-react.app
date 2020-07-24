import React from 'react';

export default class SudokuField extends React.Component{

    handleChange = (e) =>{
        const value = e.target.value === "" ? null:parseInt(e.target.value, 10);
        this.props.onChange({...this.props.field, value});
    }

    render(){
        const {field} = this.props;
        return(
            <input 
                className="field" 
                value={field.value || ""} 
                readOnly={field.readOnly}
                onChange = {this.handleChange}/>
        );
    }
}