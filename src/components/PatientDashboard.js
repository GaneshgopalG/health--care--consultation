
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'; // Optional: Your custom CSS file
function PatientDashboard() {

// Dummy data for demonstration
const [appointments, setAppointments] = useState([]);
const [medicalRecords, setMedicalRecords] = useState([]);
const [consultationHistory, setConsultationHistory] = useState([]);
const [userDetails] = useState({
name: 'John Doe',
email: 'john.doe@example.com',
contact: '123-456-7890',
});
// Fetch data (this would usually come from an API or state management)
useEffect(() => {
// Simulate fetching upcoming appointments, medical records, etc.
setAppointments([
{ id: 1, doctor: 'Dr. Smith', date: '2024-12-10', time: '10:00 AM', type: 'Online' },
{ id: 2, doctor: 'Dr. Brown', date: '2024-12-15', time: '02:00 PM', type: 'In-Person' }
]);
setMedicalRecords([
{ id: 1, fileName: 'Prescription1.pdf', type: 'Prescription' },

{ id: 2, fileName: 'BloodTestReport.pdf', type: 'Test Report' }
]);
setConsultationHistory([
{ id: 1, doctor: 'Dr. Green', date: '2024-11-20', issue: 'Fever', outcome: 'Resolved' }
]);
}, []);
return (
<div className="dashboard-container">
<h2>Patient Dashboard</h2>
<div className="profile-section">
<h3>Profile</h3>
<p><strong>Name:</strong> {userDetails.name}</p>
<p><strong>Email:</strong> {userDetails.email}</p>
<p><strong>Contact:</strong> {userDetails.contact}</p>
<Link to="/profile-settings" className="btn">Edit Profile</Link>
</div>
<div className="appointments-section">
<h3>Upcoming Appointments</h3>
<ul>
{appointments.map((appointment) => (
<li key={appointment.id} className="patient">
<p><strong>Doctor:</strong> {appointment.doctor}</p>
<p><strong>Date:</strong> {appointment.date}</p>
<p><strong>Time:</strong> {appointment.time}</p>
<p><strong>Consultation Type:</strong> {appointment.type}</p>
</li>
))}
</ul>
</div>
<div className="medical-records-section">
<h3>Medical Records</h3>
<ul>
{medicalRecords.map((record) => (
<li key={record.id} className="patient">
<p><strong>{record.type}:</strong> {record.fileName}</p>
<button>Download</button>
</li>
))}
</ul>
</div>
<div
className="consultation-history-section">
<h3>Consultation History</h3>
<ul>
{consultationHistory.map((history) => (
<li key={history.id} classname="patient">
<p><strong>Doctor:</strong> {history.doctor}</p>
<p><strong>Date:</strong> {history.date}</p>
<p><strong>Issue:</strong> {history.issue}</p>

<p><strong>Outcome:</strong> {history.outcome}</p>
</li>
))}
</ul>
</div>
</div>
);
}
export default PatientDashboard;