import React, { useEffect, useState } from 'react';

const getToken = () => {
    return localStorage.getItem('token');
};

const AdminHome = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const token = getToken();
          if (!token) {
            // Handle the case where there's no token (user is not authenticated)
            console.error('No token found. User is not authenticated.');
            return;
          }

          const response = await fetch('http://localhost:5000/users/profile', {
            method: 'GET',
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            console.error('Failed to fetch user profile');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };
      fetchUserProfile();
    }, []);

    return (
    <div className="container-fluid px-0 mt-4">
      <div
        className="card container"
        style={{
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          borderBottom: "1px solid rgba(240, 240, 240, 1)",
        }}
      >
        <div className="card-header bg-primary text-white">
          <h5 className="text-white">Profile Details</h5>
        </div>
        <div className="card-body">
          <div className="row">

            {/* profile picture */}
            <div className="col-md-3">
              <img
                src="http://placehold.it/200x200"
                alt="Profile Image"
                className="img-fluid rounded-circle mb-3"
              />
            </div>

            <div className="col-md-9">
              
              {/* name */}
              <div className="form-group mb-2">
                <label htmlFor="inputName">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value=""
                  
                />
              </div>

              {/* number */}
              <div className="form-group mb-2">
                <label htmlFor="inputNumber">Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputNumber"
                  value=""
                  
                />
              </div>

              {/* email */}
              <div className="form-group mb-2">
                <label htmlFor="inputEmail">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value=""
                  
                />
              </div>

              {/* address */}
              <div className="form-group mb-2">
                <label htmlFor="inputAddress">Address:</label>
                <textarea
                  className="form-control"
                  id=""
                  rows="3"
                  
                >
                  
                </textarea>
              </div>

              {user && (
        <div>
          <h1>{user.name}'s Profile</h1>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          {/* Add other user details as needed */}
        </div>
      )}

            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminHome;