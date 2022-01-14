import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import imgLogin from "../assets/img/login.png";
// import TitleComponent from "./title";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    navigate: false,
    authError: false,
    isLoading: false,
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePwdChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ isLoading: true });
    const url = "https://ms-wellbeing-center-backend.herokuapp.com/login";
    const email = this.state.email;
    const password = this.state.password;
    let bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.set("password", password);
    axios
      .post(url, { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          localStorage.setItem("token", result.data.data);
          this.setState({ navigate: true, isLoading: false });
          localStorage.setItem("isLoggedIn", true);
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
  };

  renderRedirect = () => {
    if (this.state.navigate) {
      return <Navigate to="/" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center">
              <img className="w-75 img-fluid" src={imgLogin} alt=""></img>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="inputEmail">
                    Email address
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="inputEmail"
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={this.handleEmailChange}
                    autoFocus
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className={
                      "form-control form-control-lg" +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="inputPassword"
                    placeholder="******"
                    name="password"
                    onChange={this.handlePwdChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Password.
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      Remember me
                    </label>
                  </div>
                  {/* <a href="#!">Forgot password?</a> */}
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    disabled={this.state.isLoading ? true : false}
                  >
                    Login &nbsp;&nbsp;&nbsp;
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link className="d-block small mt-3" to={"/signup"}>
                  Register an Account!
                </Link>
              </div>
            </div>
          </div>
        </div>
        {this.renderRedirect()}
      </section>
    );
  }
}
