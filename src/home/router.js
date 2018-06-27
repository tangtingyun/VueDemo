import React, { Component } from 'react';

import Home from './home';
import About from './about';

class HomeApp extends Component {

    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            route: window.location.hash.substr(1),
            name:"hello"
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
        window.addEventListener('hashchange', () => {

            console.log(window.location.hash);
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return false
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render() {
        let Child;
        switch (this.state.route) {
            case '/about': Child = About; break;
            case '/home': Child = Home; break;
            default: Child = Home;
        }
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About Me</a></li>
                    <li><a href="#/home">Home You</a></li>
                </ul>
                <Child />
            </div>
        );
    }
}

export default HomeApp;