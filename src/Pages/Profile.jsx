import React, { useEffect, useState } from 'react';
import api from '../Api/axios.js';
import { toast } from 'react-toastify';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    age: '',
    contactNumber: '',
    email: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/user/profile');
        setFormData(res.data);
      } catch (err) {
        toast.error('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put('/user/profiles', formData);
      toast.success(res.data.message || 'Profile updated successfully');
      setEditMode(false);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-20 flex justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">My Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!editMode}
            className={`w-full px-3 py-2 border rounded ${!editMode ? 'bg-gray-100' : ''}`}
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth?.substring(0, 10)}
            onChange={handleChange}
            disabled={!editMode}
            className={`w-full px-3 py-2 border rounded ${!editMode ? 'bg-gray-100' : ''}`}
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            disabled={!editMode}
            className={`w-full px-3 py-2 border rounded ${!editMode ? 'bg-gray-100' : ''}`}
          />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            disabled={!editMode}
            className={`w-full px-3 py-2 border rounded ${!editMode ? 'bg-gray-100' : ''}`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />

          {!editMode ? (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
            >
              Edit Profile
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
