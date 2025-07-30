import React from 'react';
import studentPhoto from '../assets/student.jpg'; // Make sure you have this file

const paymentHistory = [
  { month: 'Jan 2025', amount: '$150', status: 'Paid' },
  { month: 'Feb 2025', amount: '$150', status: 'Paid' },
  { month: 'Mar 2025', amount: '$150', status: 'Due' },
];

const Profile = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">📋 Author's Profile & Records</h2>
      <div className="card shadow rounded p-4">
        <div className="row">
          {/* Photo + Basic Info */}
          <div className="col-md-4 text-center">
            <img
              src={studentPhoto}
              alt="Student"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h4>Shadman Muhtasim</h4>
            <p className="text-muted mb-1">Student ID: 2025001</p>
            <p className="mb-1"><strong>Blood Group:</strong> B+</p>
            
          </div>

          {/* Detailed Info */}
          <div className="col-md-8">
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item"><strong>Author's Name:</strong> Shadman Muhtasim</li>
              <li className="list-group-item"><strong>Father's Name:</strong> Mr. Rahman</li>
              <li className="list-group-item"><strong>Mother's Name:</strong> Mrs. Rahima</li>
              <li className="list-group-item"><strong>Father's Phone:</strong> +880123456789</li>
              <li className="list-group-item"><strong>Mother's Phone:</strong> +880987654321</li>
              <li className="list-group-item"><strong>Current Address:</strong> Dhanmondi, Dhaka</li>
              <li className="list-group-item"><strong>Permanent Address:</strong> Khulna, Bangladesh</li>
            </ul>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
