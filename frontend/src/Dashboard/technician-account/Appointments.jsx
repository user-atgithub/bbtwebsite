import React, { useState, useEffect } from 'react';
import { formateDate } from "../../utils/formateDate";
import { FaUser } from 'react-icons/fa'; // Import user icon

const Appointments = ({ appointments }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [dateSortOption, setDateSortOption] = useState('asc');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [priceSortOption, setPriceSortOption] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 20;

  // Function to reset page number to 1 on any filter/sort change
  const resetPageToFirst = () => {
    setCurrentPage(1);
  };

  // Filter and sort appointments based on the selected options
  const filteredAppointments = appointments
    .filter(item => {
      // Filter by name
      if (nameFilter && (!item.user || !item.user.name.toLowerCase().includes(nameFilter.toLowerCase()))) {
        return false;
      }
      // Filter by payment status
      if (paymentFilter !== 'all' && (paymentFilter === 'paid') !== item.isPaid) {
        return false;
      }
      // Filter by gender
      if (genderFilter !== 'all' && (!item.user || item.user.gender !== genderFilter)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Sorting by price
      if (priceSortOption === 'asc') {
        return a.ticketPrice - b.ticketPrice;
      } else if (priceSortOption === 'desc') {
        return b.ticketPrice - a.ticketPrice;
      }
      return 0; // No sorting by price
    })
    .sort((a, b) => {
      // Sorting by date
      if (dateSortOption === 'asc') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  // Ensure page resets to 1 if any filter or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [nameFilter, dateSortOption, paymentFilter, genderFilter, priceSortOption]);

  return (
    <div>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '200px' }}>
              Name
              <input
                type="text"
                value={nameFilter}
                onChange={(e) => {
                  setNameFilter(e.target.value);
                  resetPageToFirst(); // Reset page to 1 on filter change
                }}
                placeholder="Filter by Name"
                className="ml-2 border-gray-300 rounded"
              />
            </th>
            <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '50px' }}>
              Gender
              <select
                value={genderFilter}
                onChange={(e) => {
                  setGenderFilter(e.target.value);
                  resetPageToFirst(); // Reset page to 1 on filter change
                }}
                className="ml-2 border-gray-300 rounded"
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </th>
            <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '50px' }}>
              Payment
              <select
                value={paymentFilter}
                onChange={(e) => {
                  setPaymentFilter(e.target.value);
                  resetPageToFirst(); // Reset page to 1 on filter change
                }}
                className="ml-2 border-gray-300 rounded"
              >
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </th>
            <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '50px' }}>
              Price
              <select
                value={priceSortOption}
                onChange={(e) => {
                  setPriceSortOption(e.target.value);
                  resetPageToFirst(); // Reset page to 1 on sorting change
                }}
                className="ml-2 border-gray-300 rounded"
              >
                <option value="all">No Sort</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </th>
            <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '50px' }}>
              Booked on
              <select
                value={dateSortOption}
                onChange={(e) => {
                  setDateSortOption(e.target.value);
                  resetPageToFirst(); // Reset page to 1 on sorting change
                }}
                className="ml-2 border-gray-300 rounded"
              >
                <option value="asc">Ascending Date</option>
                <option value="desc">Descending Date</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentAppointments.map(item => (
            <tr key={item._id}>
              <td className="px-6 py-4 text-gray-900" style={{ minWidth: '235px', wordBreak: 'break-word' }}>
                <div className="flex items-center">
                  {/* Profile picture or default icon */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {item.user?.photo ? (
                      <img
                        src={item.user.photo}
                        className="w-full h-full rounded-full"
                        alt={item.user?.name || 'No photo'}
                      />
                    ) : (
                      <FaUser className="w-6 h-6 text-black" />
                    )}
                  </div>
                  <div className="pl-3">
                    <div className="text-base font-semibold" style={{ maxWidth: '150px', overflowWrap: 'break-word' }}>
                      {item.user?.name || 'Unknown User'}
                    </div>
                    <div className="text-normal text-gray-500" style={{ maxWidth: '150px', overflowWrap: 'break-word' }}>
                      {item.user?.email || 'No email'}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">{item.user?.gender || 'N/A'}</td>
              <td className="px-6 py-4 text-center">
                {item.isPaid ? (
                  <div className="flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Paid
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Unpaid
                  </div>
                )}
              </td>
              <td className="px-6 py-4 text-center">{item.ticketPrice}</td>
              <td className="px-6 py-4 text-center">{formateDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center mt-6">
        <button 
          className="px-4 py-2 mx-1 border rounded-md" 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
          className="px-4 py-2 mx-1 border rounded-md" 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Appointments;
