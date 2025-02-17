
import React from "react";
import "./ServicesSection.css"; // Optional:Custom styles for the services section
const ServicesSection = () => {
return (
<section className="services-section py-5bg-white">
<div className="container text-center">
<h3 className="mb-4">Our Featured
Services</h3>
<div className="row">
{/* Service 1 */}
<div className="col-md-4">
<div className="card shadow-sm">
<div className="card-body">
<h5 className="card-title">General
Consultation</h5>
<p className="card-text">
Connect with experienced doctors for
your health needs.
</p>
</div>
</div>
</div>
{/* Service 2 */}
<div className="col-md-4">
<div className="card shadow-sm">
<div className="card-body">
<h5
className="card-title">Telemedicine</h5>
<p className="card-text">
Consult with doctors online from the comfort of your home.
</p>
</div>
</div>
</div>
{/* Service 3 */}
<div className="col-md-4">
<div className="card shadow-sm">
<div className="card-body">
<h5
className="card-title">Diagnostics</h5>
<p className="card-text">
Get lab tests and diagnostics done
quickly and easily.
</p>
</div>
</div>
</div>
</div>
</div>
</section>
);
};
export default ServicesSection;