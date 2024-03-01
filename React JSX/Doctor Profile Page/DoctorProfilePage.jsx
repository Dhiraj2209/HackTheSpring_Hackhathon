import React from 'react';
import './style.css'; // Import your CSS file

function DoctorProfile() {
  return (
    <div className="doctor-profile">
      <div className="card">
        <div className="text-center">
          <img src="doc1.png" className="doc-profile-pic" alt="Doctor Image" />
        </div>
        <div className="doc-details-info">
          <p className="doc-profile-name">Dr. Alexender Schidmt</p>
          <div className="doc-basic-info">
            <span><strong>Specialization</strong><span className="property-value"> Cardiologist</span></span>
            <span><strong>Experience</strong><span className="property-value"> 10 years</span></span>
            <span><strong>Education</strong><span className="property-value"> Ms. Cardiologist</span></span>
            <span><strong>Gender</strong><span className="property-value"> Male</span></span>
            <span><strong>Location</strong><span className="property-value"> Kalupur, Gujarat</span></span>
          </div>
        </div>
        <div className="doc-profile-moredetials">
          <p className="about"> Dr. Parimal Desai in C G Road, Ahmedabad is a top player in the category Ophthalmologists in the Ahmedabad. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Ahmedabad. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. </p>
        </div>
        <div className="doc-profile-button">
          <button>Message</button>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
