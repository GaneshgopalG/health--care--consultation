import React  from 'react';
import { BrowserRouter as Router ,Route,  Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import DoctorSearch from './components/DoctorSearch';
import DoctorProfile from './components/DoctorProfile';
import AppointmentBooking from './components/ApponitmentBooking';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import ProfileSettings from './components/ProfileSettings';
import  LoginSignup from './components/LoginSignup';
function App() {
      
       
return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path ="/" element={
                    <>
                    <HeroSection />
                    <ServicesSection />
                    <TestimonialsSection />

                    </>
                }  />
                {/*Login Route*/}
                <Route path="/LoginSignup" element={<LoginSignup />} />


                {/*Route for appointment booking */}
                <Route path="/book-appointment" element={<AppointmentBooking />} />               

                {/*Route for patient dashboard */}
                <Route path="/patient-dashboard" element={<PatientDashboard />}  />

                {/*Route for profile settings */}
                <Route path="/profile_settings" element={<ProfileSettings />}  />


                {/*Route for doctor dashboard */}
                <Route path="/doctor-dashboard" element={<DoctorDashboard />} />



                {/*Doctor Search Route */}
                <Route
                   path="/doctor-search"
                   element={<DoctorSearch /> }
                /> 

                {/*Doctor Profile Route */}
                <Route
                  path="/doctor-profile/:doctorId"
                  element={<DoctorProfile />}  
                  />   

            </Routes>
            <Footer />
        </div>
    </Router>
    
   
         
        
    
         
        
    

);
}
export default App;