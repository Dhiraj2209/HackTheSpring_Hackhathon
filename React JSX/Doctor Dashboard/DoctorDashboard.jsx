import React, {useEffect} from "react";
import axios from 'axios';
import { be_url } from "/config"; 
import { Navigate, useNavigate } from "react-router-dom";
import "../CSS/DoctorDashboard.css";

function DoctorDashBoard() {
    let navigate = useNavigate();
    useEffect(() => {
        const menuToggle = document.querySelector('.doctor-dashboard-menu-toggle');
        const navList = document.querySelector('#doctor-dashboard-nav ul');

        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });

    }, []);


    return (
        <div>
            <header id="doctor-dashboard-header">
                <h2 className="doctor-dashboard-welcome">Welcome, Dhiraj Prajapati</h2>
                <div className="doctor-dashboard-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav id="doctor-dashboard-nav">
                    <ul className="doctor-dashboard-nav-links">
                        <li>
                            <button>Appointments</button>
                            <ul className="doctor-dashboard-sub-menu">
                                <li><button 
                                // href="recentAppointments.html"
                                onClick={()=>{navigate("/recent-appointments")}}
                                >Recent Appointments</button></li>
                                <li><button 
                                // href="waitingList.html"
                                onClick={()=>{navigate("/waiting-list")}}
                                >Future Appointments</button></li>
                            </ul>
                        </li>
                        <li><button 
                        // href="#patients"
                        >Patients</button></li>
                        <li><button 
                        // href="#profile"
                        >Profile</button></li>
                        <li><button 
                        // href="#logout"
                        >Logout</button></li>
                    </ul>
                </nav>
            </header>
            <main className="doctor-dashboard-main">
                <div className="doctor-dashboard-container">
                    <section className="doctor-dashboard-section">
                        <h2>Scheduled Appointments</h2>
                        <p>Total Pending Appointments: <span id="pendingAppointmentsCount">0</span></p>
                        <button 
                        // href="recentAppointments.html?filter=pending"
                        onClick={()=>{const filter = 'pending'; navigate(`/recent-appointments?filter=${filter}`); }}
                        >View Pending Appointments</button>
                    </section>
                    <section className="doctor-dashboard-section">
                        <h2>Completed Checkups</h2>
                        <p>Total Completed Appointments: <span id="completedAppointmentsCount">0</span></p>
                        <button 
                        // href="recentAppointments.html?filter=completed"
                        onClick={()=>{const filter = 'completed'; navigate(`/recent-appointments?filter=${filter}`); }}
                        >View Completed Appointments</button>
                    </section>
                    <section className="doctor-dashboard-section">
                        <h2>Wait-List</h2>
                        <p>Total Appointments in queue: <span id="totalAppointmentsCountinQueue">0</span></p>
                        <button 
                        // href="waitingList.html"
                        onClick={()=>{navigate("/waiting-list"); }}
                        >View Appointment Queue</button>
                    </section>
                    <section className="doctor-dashboard-section">
                        <h2>Cancelled Appointment</h2>
                        <p>Total cancelled Appointments: <span id="totalcancelledAppointmentsCount">0</span></p>
                        <button 
                        href="recentAppointments.html?filter=cancelled"
                        onClick={()=>{const filter = 'cancelled'; navigate(`/recent-appointments?filter=${filter}`); }}
                        >View Cancelled Appointment</button>
                    </section>
                    <section className="doctor-dashboard-section">
                        <h2>Patient Details</h2>
                        <button 
                        // href="#"
                        >Patients Page</button>
                    </section>
                    <section className="doctor-dashboard-section">
                        <h2>GPT Powered Analysis</h2>
                        <button 
                        // href="#"
                        >GPT Powered Analysis</button>
                    </section>
                </div>
            </main>
            <footer id="doctor-dashboard-footer">
                <div className="doctor-dashboard-contact-info">
                    <h3>Contact Information</h3>
                    <p>123 Main Street, City, Country</p>
                    <p>Phone: +123-456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="doctor-dashboard-quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><button href="#">Clinic Website</button></li>
                        <li><button href="#">Patient Records</button></li>
                        <li><button href="#appointments">Appointment Management</button></li>
                    </ul>
                </div>
                <div className="doctor-dashboard-legal-info">
                    <p>&copy; 2024 Doctor Dashboard. All rights reserved.</p>
                    <p><button href="#">Privacy Policy</button> | <button href="#">Terms of Service</button></p>
                </div>
            </footer>
        </div>
    );
}

export default DoctorDashBoard;
