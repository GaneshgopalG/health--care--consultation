import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentBooking.css"; // Optional: CSS for styling
function AppointmentBooking() {
const [appointmentDetails,
setAppointmentDetails] = useState({
doctorName: "Dr. Jane Doe", // This can be passed dynamically from Doctor Profile
date: "",
time: "",
consultationType: "Online",
paymentStatus: "Pending",
});

const [paymentDone, setPaymentDone] = useState(false);
const navigate = useNavigate();

const handleChange = (e) => {
const { name, value } = e.target;
setAppointmentDetails({ ...appointmentDetails, [name]: value });
};

const handlePayment = () => {
// Simulating payment process
setPaymentDone(true);
setAppointmentDetails({
...appointmentDetails,
paymentStatus: "Completed",
});
};
const handleConfirm = () => {
// Redirect to a confirmation page or dashboard
alert("Appointment Confirmed!");
   navigate("/patient-dashboard");
};
return (
<div
className="appointment-booking-container">
<h2>Book Appointment</h2>
<div className="booking-form">
<h3>Doctor: {appointmentDetails.doctorName}</h3>
<div className="form-group">
<label htmlFor="date">Select Date:</label>
<input
type="date"
id="date"
name="date"
value={appointmentDetails.date}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label htmlFor="time">Select Time:</label>
<select
id="time"
name="time"
value={appointmentDetails.time}
onChange={handleChange}
required
>
<option value="">Select Time</option>
<option value="10:00 AM">10:00 AM</option>
<option value="11:00 AM">11:00 AM</option>
<option value="02:00 PM">02:00 PM</option>
<option value="04:00 PM">04:00 PM</option>
</select>
</div>
<div className="form-group">
<label>Type of Consultation:</label>
<div>
<label>
<input
type="radio"
name="consultationType"
value="Online"
checked={appointmentDetails.consultationType === "Online"}
onChange={handleChange}
/>
Online
</label>
<label>
<input
type="radio"
name="consultationType"
value="In-Person"
checked={appointmentDetails.consultationType === "In-Person"}
onChange={handleChange}
/>
In-Person
</label>
</div>
</div>
<div className="form-group">
<label>Consultation Fee: $50</label>
<button
className={`btn ${paymentDone ? "btn-disabled" : ""}`}
disabled={paymentDone}
onClick={handlePayment}
>
{paymentDone ? "Payment Done" : "Pay Now"}
</button>
</div>
{paymentDone && (
<div className="confirmation-section">
<h4>Appointment Details</h4>
<p><strong>Doctor:</strong> {appointmentDetails.doctorName}</p>
<p><strong>Date:</strong> {appointmentDetails.date}</p>
<p><strong>Time:</strong> {appointmentDetails.time}</p>
<p><strong>Consultation Type:</strong> {appointmentDetails.consultationType}</p>
<p><strong>Payment Status:</strong> {appointmentDetails.paymentStatus}</p>
<button className="btn-confirm" onClick={handleConfirm}>
Confirm Appointment
</button>
</div>
)}
</div>
</div>
);
}
export default AppointmentBooking;