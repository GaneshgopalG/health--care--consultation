import React from "react";
import "./TestimonialsSection.css";
function TestimonialSection() {
// Example testimonials data
const testimonials = [
{
name: "John Doe",
role: "Software Engineer",
message:
"The healthcare consultation was top-notch.The doctor listened to my concerns and provided a detailed treatment plan. I feltcomfortable throughout the consultation.",
image: "https://via.placeholder.com/80",
},
{
name: "Jane Smith",
role: "Marketing Manager",
message:
"I loved the virtual consultation experience!It was convenient, and the doctor gave me great advice on how to manage my health remotely.",
image: "https://via.placeholder.com/80",
},
{
name: "Mike Johnson",
role: "Entrepreneur",
message:
"Quick, easy, and very professional. I could book an appointment without hassle and get all the information I needed. Highly recommended!",
image: "https://via.placeholder.com/80",
},
];
return (
<section className="testimonial-section">
<h2 className="section-title">What Our Patients Say</h2>
<div className="testimonial-container">
{testimonials.map((testimonial, index) => (
<div key={index}
className="testimonial-card">
<div className="testimonial-header">
<img
src={testimonial.image}
alt={testimonial.name}
className="testimonial-image"/>

<div>
<h3
className="testimonial-name">{testimonial.name}</h3>
<p
className="testimonial-role">{testimonial.role}
</p>
</div>
</div>
<p
className="testimonial-message">"{testimonial.message}"</p>
</div>
))}
</div>
</section>
);
}
export default TestimonialSection;