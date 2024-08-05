// src/components/Tickets.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tickets() {
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
        setTicketData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
        setError('Failed to load ticket data. Please try again later.');
        setLoading(false);
      }
    };

    fetchTicketData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!ticketData) return <div>No ticket data available.</div>;

  return (
    <div className="tickets">
      <h2>Tickets</h2>
      <p>Currency: {ticketData.currency_name}</p>
      <p>Tax Name: {ticketData.tax_name}</p>
      <p>Tax Percentage: {ticketData.tax_percentage}%</p>
      {/* You would typically map over an array of tickets here */}
      {/* For now, we'll just display some general information */}
      <p>Is Free Event: {ticketData.is_free ? 'Yes' : 'No'}</p>
      <p>Payment Gateway Charge: {ticketData.non_inr_pg_percentage}%</p>
    </div>
  );
}

export default Tickets;