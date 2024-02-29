import React, { useState, useEffect } from 'react';
import './StyleForAppoinmentbooking.css';

function AppointmentBookingPage() {
    useEffect(() => {
        // Set min date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.getElementById('AppoinBooking-date').min = tomorrow.toISOString().split('T')[0];
    }, []);

    // Sample array of doctors (replace this with your actual data source)
    const doctors = ["Dr. ABCURIWOYSH SHI","Dr. Jay", "Dr. Honey", "Dr. Vineet", "Dr. Jane Smith", "Dr. Michael Johnson"];

    useEffect(() => {
        const populateDoctors = () => {
            const doctorSelect = document.getElementById("AppoinBooking-doctor");
            doctorSelect.innerHTML = ""; // Clear existing options

            // Add default option
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Select Doctor";
            doctorSelect.appendChild(defaultOption);

            // Add options for each doctor
            doctors.forEach(doctor => {
                const option = document.createElement("option");
                option.value = doctor;
                option.textContent = doctor;
                doctorSelect.appendChild(option);
            });
        };

        populateDoctors(); // Call the function to populate doctors
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div id='AppoinBooking-body'>
            <h1 id='AppoinBooking-h1'>Book an Appointment</h1>
            <hr />
            <form id="AppoinBooking-appointmentForm">
                <label htmlFor="AppoinBooking-date">Date:</label>
                <input type="date" id="AppoinBooking-date" name="date" min="" required /><br />

                <label htmlFor="AppoinBooking-time">Time:</label>
                <select id="AppoinBooking-time" name="time" required>
                    <option value="">Select Time</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    {/* Add more time slots as needed */}
                </select><br />
                
                <label htmlFor="AppoinBooking-doctor">Doctor:</label>
                <select id="AppoinBooking-doctor" name="doctor" required>
                    {/* Doctors will be populated dynamically here */}
                </select><br />


                <label htmlFor="AppoinBooking-mode">Reason for Checkup:</label>
                <select id="AppoinBooking-mode" name="mode" required>
                    <option value="">Select Reason</option>
                    <option value="RoutineCheckup">Routine Checkup</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Vaccination">Vaccination</option>
                    <option value="MedicationAdjustment">Medication Adjustment</option>
                    <option value="MentalHealthConsultation">Mental Health Consultation</option>
                </select><br />

                <label htmlFor="AppoinBooking-reason">Additional description:</label>
                <textarea id="AppoinBooking-reason" name="reason" rows="4"></textarea><br />

                <input type="submit" value="Schedule Appointment" />
            </form>
        </div>
    );
}

export default AppointmentBookingPage;
