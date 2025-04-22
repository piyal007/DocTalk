import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const MainSection = () => {
    const [doctors, setDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/Data/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const visibleDoctors = showAll ? doctors : doctors.slice(0, 6);

    return (
        <div className="w-11/12 mx-auto py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Best Doctors</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {visibleDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
            <div className="text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
                >
                    {showAll ? 'Show Less' : 'View All Doctors'}
                </button>
            </div>
        </div>
    );
};

export default MainSection;