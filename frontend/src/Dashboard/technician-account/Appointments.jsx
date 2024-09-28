import React, { useState } from 'react';
import { formateDate } from "../../utils/formateDate";

const Appointments = ({ appointments }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [dateSortOption, setDateSortOption] = useState('asc');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [priceSortOption, setPriceSortOption] = useState('all');

  // Filter and sort appointments based on the selected options
  const filteredAppointments = appointments
    .filter(item => {
      // Filter by name
      if (nameFilter && !item.user.name.toLowerCase().includes(nameFilter.toLowerCase())) {
        return false;
      }
      // Filter by payment status
      if (paymentFilter !== 'all' && (paymentFilter === 'paid') !== item.isPaid) {
        return false;
      }
      // Filter by gender
      if (genderFilter !== 'all' && item.user.gender !== genderFilter) {
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

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '200px' }}>
            Name
            <input
              type="text"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              placeholder="Filter by Name"
              className="ml-2 border-gray-300 rounded"
            />
          </th>
          <th scope="col" className="px-6 py-3 text-center" style={{ minWidth: '50px' }}>
            Gender
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
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
              onChange={(e) => setPaymentFilter(e.target.value)}
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
              onChange={(e) => setPriceSortOption(e.target.value)}
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
              onChange={(e) => setDateSortOption(e.target.value)}
              className="ml-2 border-gray-300 rounded"
            >
              <option value="asc">Ascending Date</option>
              <option value="desc">Descending Date</option>
            </select>
          </th>
        </tr>
      </thead>

      <tbody>
        {filteredAppointments.map(item => (
          <tr key={item._id}>
            <td className="px-6 py-4 text-gray-900" style={{ minWidth: '235px', wordBreak: 'break-word' }}>
              <div className="flex items-center">
                <img
                  src={item.user.photo || 'https://via.placeholder.com/40'} // Placeholder image URL
                  className="w-10 h-10 rounded-full"
                  alt={item.user.name || 'No photo'}
                />
                <div className="pl-3">
                  <div className="text-base font-semibold" style={{ maxWidth: '150px', overflowWrap: 'break-word' }}>{item.user.name}</div>
                  <div className="text-normal text-gray-500" style={{ maxWidth: '150px', overflowWrap: 'break-word' }}>{item.user.email}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-center">{item.user.gender}</td>
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
            <td className="px-6 py-4 text-center" style={{ minWidth: '50px' }}>{item.ticketPrice}</td>
            <td className="px-6 py-4 text-center">{formateDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;
