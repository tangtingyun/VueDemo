import React, { Component } from 'react';


class App extends Component {



  constructor(props) {
    super(props)
    this.state = {
      name: "zyf"
    }
  }


  say = () => { console.log("why ?? ") }

  bindClick() {
    console.log("hhhhhhhhh");
    // this.setState({ name: "lyn" })

    this.setState(function (pre,props) {
      console.log("========pre======")
      console.log(pre);
      console.log(props)
      return {
        name: pre.name + "lyn"
      }
    })
  }



  test(params) {

    fetch("https://www.baidu.com")
      .then(s => {
        console.log(s);
      })
      .catch(e => {
        console.log("异常信息 " + e);
      })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started,{this.state.name} and save to reload.五一劳动节 放假
        </p>
        <h1 onClick={this.bindClick.bind(this)}>Click me</h1>
        <button className="zyf" onClick={() => { console.log("hello react") }}>{this.state.name}</button>
      </div>

    );
  }
}
export default App;