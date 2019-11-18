import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount = () => {
    fetch("https://api.github.com/users/godsenwrath")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        this.setState({ data: data });
      });
  };

  render() {
    console.log(this.state.data, "Profile");
    return (
      <div>
        <img alt="img" width="50%%" className="App-logo" src={this.state.data.avatar_url} />
        <br></br>
        <h1>Hi! <br/> I'm {this.state.data.name}</h1>
        <p> ({this.state.data.login})</p>
        <div>
        <h3>'{this.state.data.bio}'</h3>
        <h4>{this.state.data.location}</h4>
        </div>
      </div>
      
   
    );
  }
}
