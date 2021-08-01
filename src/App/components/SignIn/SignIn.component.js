import React, { Component } from "react";

// Importing Styles
import "./SignIn.styles.scss";

export class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  submitEventHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitEventHandler}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
