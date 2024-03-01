import React, { useState, useEffect } from 'react';
import './YourAppointment.css';

const YourAppointment = () => {
    const [appointments, setAppointments] = useState([
        { doctorName: "John Doe", date: "2024-02-23", time: "10:00 AM", reason: "Regular Checkup", status: "Pending" },
        { doctorName: "Jane Smith", date: "2024-02-24", time: "01:06 AM", reason: "Dental Cleaning", status: "Accepted" },
        { doctorName: "Dhiraj Prajapati", date: "2024-02-22", time: "09:30 AM", reason: "Consultant", status: "Rejected" },
        { doctorName: "Glen Smith", date: "2024-01-01", time: "11:30 AM", reason: "Operation", status: "Pending"},
        { doctorName: "oontie ith", date: "2023-12-25", time: "04:30 PM", reason: "Operation", status: "Accepted" }
    ]);

    useEffect(() => {
        displayAppointments(appointments);
    }, []);

    const displayAppointments = (appointmentsToDisplay) => {
        const tableBody = document.querySelector('#your-app-appointmentsTable tbody');
        tableBody.innerHTML = '';

        appointmentsToDisplay.forEach(appointment => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = appointment.doctorName;
            row.insertCell(1).textContent = appointment.date;
            row.insertCell(2).textContent = appointment.time;
            row.insertCell(3).textContent = appointment.reason;
            row.insertCell(4).textContent = appointment.status;

        });
    }

    const filterAppointments = () => {
        const statusFilter = document.getElementById('your-app-statusFilter').value;

        const filteredAppointments = appointments.filter(appointment => {
            const statusMatch = statusFilter === 'all' || appointment.status === statusFilter;
            return statusMatch;
        });

        displayAppointments(filteredAppointments);
    }

    const sortTable = (columnIndex) => {
        const statusFilter = document.getElementById('your-app-statusFilter').value;
        let sortedAppointments = appointments;

        if (statusFilter !== 'all') {
            sortedAppointments = sortedAppointments.filter(appointment => appointment.status === statusFilter);
        }

        sortedAppointments.sort((a, b) => {
            const valueA = a[Object.keys(a)[columnIndex]];
            const valueB = b[Object.keys(b)[columnIndex]];
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB);
            } else {
                return valueA - valueB;
            }
        });
        displayAppointments(sortedAppointments);
    }

    const searchAppointments = (e) => {
        const searchInput = e.target.value.trim().toLowerCase();
        const statusFilter = document.getElementById('your-app-statusFilter').value;

        const filteredAppointments = appointments.filter(appointment => {
            const doctorName = appointment.doctorName.toLowerCase();
            const status = appointment.status;
            return doctorName.includes(searchInput) && (statusFilter === 'all' || status === statusFilter);
        });

        displayAppointments(filteredAppointments);
    }

    return (
        <div className="your-app-container">
            <h1 id='your-app-herotext'>Your Appointments</h1>
            <hr />
            <div className="your-app-controls">
                <div className="your-app-sort">
                    Sort by:
                    <button onClick={() => sortTable(1)}>Doctor Name</button>
                    <button onClick={() => sortTable(2)}>Date</button>
                </div>
                <div className="your-app-filter">
                    Filter by Status:
                    <select id="your-app-statusFilter" onChange={filterAppointments}>
                        <option value="all">All</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <hr />
            <div id='your-app-searchbar'>
                Search by Doctor Name:
                <input type="text" id="your-app-searchInput" onInput={searchAppointments} />
            </div>
            <hr />

            <table id="your-app-appointmentsTable">
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Appointments will be dynamically added here */}
                </tbody>
            </table>
        </div>
    );
}

export default YourAppointment;