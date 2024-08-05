// Header.js
import React from 'react';

function Header({ eventData }) {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold">{eventData.name}</h1>
        <p className="mt-2 text-xl text-indigo-200">{eventData.event_short_name}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href={eventData.event_website} className="bg-white text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-100 transition duration-300">
            Visit Website
          </a>
          {eventData.event_twitter_url && (
            <a href={eventData.event_twitter_url} className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300">
              Twitter
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;