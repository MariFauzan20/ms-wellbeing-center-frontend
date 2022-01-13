import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import imgSignup from "../assets/img/signup.png";

export default class SignUp extends Component {
  state = {
    name: "",
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
  handleNamaChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleUserNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const url = "https://ms-wellbeing-center-backend.herokuapp.com/register";
    const email = this.state.email;
    const password = this.state.password;
    const nama = this.state.nama;
    const username = this.state.username;
    axios
      .post(url, { email, nama, username, password })
      .then((result) => {
        this.setState({ isLoading: false });
        if (result.data.status !== "fail") {
          this.setState({ navigate: true, authError: true });
        } else {
          this.setState({ navigate: false, authError: true });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ authError: true, isLoading: false });
      });
  };

  renderRedirect = () => {
    if (this.state.navigate) {
      return <Navigate to="/article" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className="my-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h1>Sign Up</h1>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={this.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="inputNama">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="inputNama"
                              className="form-control"
                              placeholder="nama"
                              name="nama"
                              onChange={this.handleNamaChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="inputUserName"
                            >
                              User Name
                            </label>
                            <input
                              type="text"
                              id="inputUserName"
                              className="form-control"
                              placeholder="username"
                              name="username"
                              onChange={this.handleUserNameChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="inputEmail">
                              Your Email
                            </label>
                            <input
                              id="inputEmail"
                              className="form-control"
                              placeholder="Email address"
                              type="text"
                              name="email"
                              onChange={this.handleEmailChange}
                              autoFocus
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="inputPassword"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword"
                              placeholder="******"
                              name="password"
                              onChange={this.handlePwdChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={this.state.isLoading ? true : false}
                          >
                            Register &nbsp;&nbsp;&nbsp;
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
                        <div className="text-center">
                          <Link className="d-block small mt-3" to={"/login"}>
                            Login Your Account
                          </Link>
                          <Link className="d-block small" to={"#"}>
                            Forgot Password?
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        className="w-100 img-fluid"
                        src={imgSignup}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.renderRedirect()}
      </div>
    );
  }
}
