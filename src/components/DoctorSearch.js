import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./DoctorSearch.css"

function  DoctorSearch(){
      const navigate = useNavigate();
    

const doctors = [
{
id: 1,
name: "Dr. John Smith",
photo: "doctor1.jpg",
specialization: "Cardiologist",
location: "New York",
availability: "Online",
rating: 4.8,
fee: 150,
},
{
id: 2,
name: "Dr. Jane Doe",
photo: "doctor2.jpg",
specialization: "Dermatologist",
location: "Los Angeles",
availability: "In-person",
rating: 4.6,
fee: 200,
},
// Add more sample doctors here...
];

const handleDoctorClick =(doctorID) => {
    navigate('/doctor-profile/:{doctorID} ');
};

return (
<div className="doctor-search">
<h2>Search Doctors</h2>
<div className="results">
{doctors.map((doctor) => (
 <div
key={doctor.id}
className="doctor-card"
onClick={() => handleDoctorClick(doctor)} // Pass doctor to the handler
>
<img src={doctor.photo}
alt={doctor.name} />
<h3>{doctor.name}</h3>
<p>Specialization: {doctor.specialization}</p>
<p>Location: {doctor.location}</p>
<p>Rating: {doctor.rating} ★</p>
<p>Fee: ${doctor.fee}</p>
</div>
))}
</div>
</div>
);
}
export default DoctorSearch;