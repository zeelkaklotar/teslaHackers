import React, { useEffect, useState } from 'react';
import apiService from '../apiService';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data from the API when the component mounts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await apiService.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.delete(`/contacts/${id}`);
      // After successful deletion, fetch contacts again to update the table
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Data Set</h1>
      <div className="overflow-x-auto flex items-center">
        <table className="table-auto w-full border-collapse border border-gray-400 ">
          <thead>
            <tr className="bg-gray-200 ">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Actions</th> {/* New column for delete button */}
            </tr>
          </thead>
          <tbody className="">
            {contacts.map(contact => (
              <tr key={contact._id} className="border-t border-gray-400 ">
                <td className="px-4 py-2">{contact.name}</td>
                <td className="px-4 py-2">{contact.email}</td>
                <td className="px-4 py-2">{contact.message}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-red-500 text-white rounded-md px-3 py-1"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsPage;
