import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ExerciseOne} from "./exercise-one.jsx";
import {ExerciseTwo} from "./exercise-two.jsx";

export class App extends Component {
    render() {
        return (
            <Router>
                <div className={'wrap-container'}>
                    <div className={'container'}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/exercise_one">Задание 1</Link>
                                </li>
                                <li>
                                    <Link to="/exercise_two">Задание 2</Link>
                                </li>
                                <li>
                                    <Link to="/exercise_three">Задание 3</Link>
                                </li>
                                <li>
                                    <Link to="/exercise_four">Задание 4</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/exercise_one">
                                <ExerciseOne/>
                            </Route>
                            <Route path="/exercise_two">
                                <ExerciseTwo/>
                            </Route>
                            <Route path="/">
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


