
import React, { useState, useEffect } from "react";
import "./DoctorDashboard.css";       // Assuming you have a CSS file for styling

function DoctorDashboard() {
const [appointments, setAppointments] = useState([]);
const [consultationNotes, setConsultationNotes] = useState({});
const [earnings, setEarnings] = useState({ total: 0, pending: 0 });
const [profile] = useState({
      specialization: "General Medicine",
      consultationFee: 100,
      availability: "Available",
});

// Simulate fetching data from an API
useEffect(() => {
// Sample appointments
setAppointments([
{
id: 1,
patientName: "John Doe",
date: "2024-11-29",
time: "10:00 AM",
status: "Upcoming",
},
{
id: 2,
patientName: "Jane Smith",
date: "2024-11-30",
time: "02:00 PM",
status: "Upcoming",
},
]);
// Simulate earnings overview
setEarnings({
total: 500,
pending: 150,
});
// Simulate consultation notes (for each patient)
setConsultationNotes({
1: "Patient reports mild chest pain, further tests recommended.",
2: "Patient reports back pain, prescribed painkillers.",
});

}, []);

// Handle updating consultation notes
const handleNoteChange = (e, appointmentId) => {
setConsultationNotes({
...consultationNotes,
[appointmentId]: e.target.value,
});
};

return (
<div className="doctor-dashboard">
<div className="dashboard-header">
Doctor Dashboard
</div>

{/* Appointment Management */}
<div className="dashboard-section">
<div className="section-title">Upcoming Appointments</div>
<div className="appointments-list">
{appointments.map((appointment) => (
<div key={appointment.id} className="appointment-card">
<div className="appointment-details">
<div className="appointment-title">
{appointment.patientName}
</div>
<div className="appointment-time">
{appointment.date} - {appointment.time}
</div>
</div>

<div className="appointment-status">
Status: {appointment.status}
</div>
<div className="consultation-notes">
<textarea
placeholder="Add consultation notes..."
value={consultationNotes[appointment.id] || ""}
onChange={(e) => handleNoteChange(e, appointment.id)}
/>
</div>
</div>
))}
</div>
</div>

{/* Earnings Overview */}
<div className="dashboard-section">
<div className="section-title">Earnings Overview</div>
<div className="earnings-summary">
<div>
<span>Total Earnings: </span>
<strong>${earnings.total}</strong>
</div>
<div>
<span>Pending Earnings: </span>
<strong>${earnings.pending}</strong>
</div>
</div>
</div>

{/* Profile Settings */}
<div className="dashboard-section">
<div className="section-title">Profile Settings</div>
<div className="profile-settings">
<div>
<span>Specialization: </span>
<strong>{profile.specialization}</strong>
</div>
<div>
<span>Consultation Fee: </span>
<strong>${profile.consultationFee}</
strong>
</div>
<div>
<span>Availability: </span>
<strong>{profile.availability}</strong>
</div>
<button className="btn-edit">Edit Profile</button>
</div>
</div>
</div>
);
}
export default DoctorDashboard;