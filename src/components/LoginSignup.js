import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";   //import useNavigate for redirection
import "./LoginSignup.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); //Toggle between login and signup
  const [role, setRole] = useState("patient")  //role selection {doctor or patient}
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
});
const [errors, setErrors] = useState({});
const navigate = useNavigate();

// Handle form input changes
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

// Handle form submission (Basic validation)
const handleSubmit = (e) => {
   e.preventDefault();
let validationErrors = {};


// Basic validation
if (!formData.username) validationErrors.username = "Username is required";
if (!formData.email) validationErrors.email = "Email is required";
if (!formData.password) validationErrors.password = "Password is required";

if (!isLogin && formData.password !== formData.confirmPassword) {
  validationErrors.confirmPassword = "Passwords do not match";
}
if (Object.keys(validationErrors).length === 0) {
// Submit the form (this can be an API call to backend for authentication)
if (isLogin) {
    //assuming login is successful
    alert("Login successful !");

  navigate("/doctor-search");
} else {
     alert("signup successful");
}


//after signup ,navigate to the doctor /patient  dashboard
  if(role === "doctor") {
    navigate("/doctor-dashboard");
  } else {
    navigate("/patient-dashboard");
  }

} else {
setErrors(validationErrors);
}
};
return (
<div className="auth-container">
<div className="auth-form">
<h2 className="sample">{isLogin ? "Login" : "Signup"}</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="username">Username</label>
<input
type="text"
id="username"
name="username"
value={formData.username}
onChange={handleChange}
required/>
{errors.username && <p className="error">{errors.username}</p>}
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
{errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input
type="password"
id="password"
name="password"
value={formData.password}
onChange={handleChange}
required
/>
{errors.password && <p className="error">{errors.password}</p>}
</div>
{!isLogin && (
<div className="form-group">
<label htmlFor="confirmPassword">Confirm Password</label>
<input
type="password"
id="confirmPassword"
name="confirmPassword"
value={formData.confirmPassword}
onChange={handleChange}
required
/>
{errors.confirmPassword && (
<p className="error">{errors.confirmPassword}</p>
)}
</div>
)}

{/* Role Selection */} 
{!isLogin && (
     <div className="form-group"> <label>Register as:</label>
      <select 
      name="role" 
      value={role}
      onChange={(e) => setRole(e.target.value)} 
      >
<option value="patient">Patient</option>
<option value="doctor">Doctor</option> </select> 
</div> 
)}



<div className="form-actions">
<button type="submit" className="btn-submit">
{isLogin ? "Login" : "Sign Up"}
</button>
<p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
</p>
</div>
</form>
</div>
</div>
);
}
export default LoginSignup;