// Sponsors.js
import React from 'react';

function Sponsors({ eventData }) {
  // Note: The API doesn't provide sponsor data, so we'll create a placeholder
  const dummySponsors = [
    { name: 'TechCorp', level: 'Gold' },
    { name: 'InnovateNow', level: 'Silver' },
    { name: 'FutureTech', level: 'Bronze' },
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{eventData.sponsor_section_title}</h2>
      <div dangerouslySetInnerHTML={{ __html: eventData.sponsor_section_description }} className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummySponsors.map((sponsor, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">{sponsor.name}</h3>
            <p className="text-gray-600">{sponsor.level} Sponsor</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;