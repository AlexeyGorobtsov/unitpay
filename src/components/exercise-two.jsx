import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'


export class ExerciseTwo extends Component {
    render(){
        return(
            <div>
                <button>
                    <FontAwesomeIcon icon={faPen} color={'red'} />
                </button>
            </div>
        )
    }
}