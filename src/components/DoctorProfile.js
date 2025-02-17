import React,{ useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorProfile.css";

function DoctorProfile() { 
    const { doctorId } = useParams(); // Get doctor ID from URL 
    const [doctor, setDoctor] = useState(null); 
    const navigate= useNavigate(); // Fetch doctor profile data based on the doctor ID (Simulating with mock data)
useEffect(() => { 
    // Here you would fetch the doctor's data from your API
     const fetchedDoctor = { 
        id: doctorId, 
        name: "Dr. John Doe",
        specialization: "Cardiologist",
         rating: 4.8,
        consultationFee: "$100", 
        biography: "Experienced cardiologist with over 10 years in practice.",
        certifications: "Certified by American Heart Association.",
        availableSlots: ["9:00 AM - 10:00AM", "11:00 AM - 12:00 PM", "2:00 PM - 3:00 PM"],
        profileImage: "doctor1.jpg", };
setDoctor(fetchedDoctor);
 }, [doctorId]);
  //Function to handle appointment booking 
  const handleBookAppointment = () =>{
     alert("Appointment Booked Successfully!"); //Redirect to a page or show a confirmationmessage 
     navigate("/book-appointment"); //Navigate to the patient's dashboard (orappointment page)
      }; 
      if (!doctor) { 
        return<div>Loading...</div>; // Loading state while fetching data 
        }

return (
<div className="doctor-profile">
<img src={doctor.profileImage} alt={doctor.name} />
<h2>{doctor.name}</h2>
<p>Specialization: {doctor.specialization}</p>
<p>Experience: {doctor.experience} years</p>
<p>Rating: {doctor.rating} ★</p>
<p>Consultation Fee: ${doctor.consultationfee}</p>

<p> Biography: {doctor.biography}</p>
<p>Certifications:{doctor.certificates} </p>
<h3> Available Time Slots</h3>
<ul>
  {doctor.availableSlots.map((slot, index) => (
   <li key={index}>{slot}</li>
))}
</ul>
<button onClick={handleBookAppointment}>Book Appointment</button>
</div>
);
}
export default DoctorProfile;