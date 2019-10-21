import React, {Component} from 'react';
const str = 'const getElement = (name, value) => \n' +
    '     document.querySelector(`[${name}="${value}"]`);';

export class ExerciseOne extends Component {
    render() {
        return (
            <div className={'exercise-one'}>
                {str}
            </div>
        );
    }
}