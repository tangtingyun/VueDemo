import React from 'react';

import Home from './home'
import About from './about'

class HomeApp extends Component {

    constructor(props){
        super(props)
        this.state={
            route:window.location.hash.substr(1)
        }
    }


    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            this.setState({
                route:window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child;
        switch (this.state.route){
            case '/about':Child=About;break;
            case '/home':Child=Home;break;
            default: Child=Home;
        }
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/home">Home</a></li>
                </ul>
                <Child/>
            </div>
        );
    }
}

export default HomeApp;