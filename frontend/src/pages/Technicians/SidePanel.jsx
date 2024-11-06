import React, { useState } from 'react';
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from './../../config';
import { toast } from 'react-toastify';

const SidePanel = ({ technicianId, ticketPrice, timeSlots }) => {
  const [isGuestCheckout, setIsGuestCheckout] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');

  const bookingHandler = async () => {
    try {
      const endpoint = isGuestCheckout ? '/guest-checkout-session' : '/checkout-session';
      const headers = isGuestCheckout
        ? { 'Content-Type': 'application/json' }
        : { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

      const res = await fetch(`${BASE_URL}/bookings${endpoint}/${technicianId}`, {
        method: 'POST',
        headers: headers,
        body: isGuestCheckout ? JSON.stringify({ email: guestEmail }) : null,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(`${data.message} Please try again`);
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8">
          {ticketPrice} CAD
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Guest checkout option */}
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isGuestCheckout}
            onChange={(e) => setIsGuestCheckout(e.target.checked)}
            className="checkbox"
          />
          <span className="text-sm font-semibold">Checkout as Guest</span>
        </label>

        {/* Show email input if guest checkout is selected */}
        {isGuestCheckout && (
          <div className="mt-3">
            <label htmlFor="guestEmail" className="text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="guestEmail"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              className="input w-full mt-1 px-2 py-1 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
        )}
      </div>

      <button
        onClick={bookingHandler}
        className="btn px-2 w-full rounded-md mt-4"
        disabled={isGuestCheckout && !guestEmail} // Disable if guest email is empty
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
