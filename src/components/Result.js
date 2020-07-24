import React from 'react';

export default class Result extends React.Component {

    render() {
        const { sudoku } = this.props;
        const elapsed = Math.floor((sudoku.solveTime.getTime() - sudoku.startTime.getTime()) / 1000);

        return <h2>You solved it in: {elapsed} seconds</h2>
    }
}