// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Workshops from './components/Workshops';

function App() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      const API_URL = 'https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task';
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      
      try {
        const response = await axios.get(CORS_PROXY + API_URL);
        setEventData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Failed to load event data. Please try again later.');
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-600 text-center p-4">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header eventData={eventData} />
      <main className="container mx-auto px-4 py-8">
        <EventDetails eventData={eventData} />
        {eventData.has_speakers && <Speakers eventData={eventData} />}
        {eventData.has_sponsors && <Sponsors eventData={eventData} />}
        {eventData.has_workshops && <Workshops eventData={eventData} />}
      </main>
    </div>
  );
}

export default App;
