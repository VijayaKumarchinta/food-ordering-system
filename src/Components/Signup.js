import React from "react";
import { Link } from "react-router-dom";
import HungryHeartDark from "../assets/Images/hh_dark_logo.png";

function SignUp() {
  return (
    <div className="container">
      <h2>Sign Up - Online Food Ordering System</h2>
      <form id="Signup" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can handle form submission logic
    // For example, you can get form values using event.target.elements
    const fullName = event.target.elements.fullName.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;
    // Then you can perform validation, API calls, etc.
    // For now, let's just log the values
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }
}

export default SignUp;
