
import React, { useState } from 'react';
import './ProfileSettings.css'; // Optional: Your custom CSS file
function ProfileSettings() {
const [userDetails, setUserDetails] = useState({
name: 'John Doe',
email: 'john.doe@example.com',
contact: '123-456-7890',
password: ''
});
const handleChange = (e) => {
const { name, value } = e.target;
setUserDetails({ ...userDetails, [name]: value });
};
const handleSubmit = (e) => {
e.preventDefault();
// Submit the form (this could be an API call)
alert('Profile updated successfully');
};
return (
<div className="profile-settings-container">
<h2>Edit Profile</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="name">Name</label>
<input
type="text"
id="name"
name="name"
value={userDetails.name}

onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
name="email"
value={userDetails.email}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label htmlFor="contact">Contact
Number</label>
<input
type="text"
id="contact"
name="contact"
value={userDetails.contact}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label htmlFor="password">Password</
label>
<input
type="password"
id="password"
name="password"
value={userDetails.password}
onChange={handleChange}
required
/>
</div>
<button type="submit"
className="btn-submit">Update Profile</
button>
</form>
</div>
);
}
export default ProfileSettings;