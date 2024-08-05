// Speakers.js
import React from 'react';

function Speakers({ eventData }) {
  // Note: The API doesn't provide speaker data, so we'll create a placeholder
  const dummySpeakers = [
    { name: 'John Doe', role: 'CEO, Tech Inc.' },
    { name: 'Jane Smith', role: 'CTO, Innovation Co.' },
    { name: 'Alice Johnson', role: 'AI Researcher' },
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{eventData.speaker_section_title}</h2>
      <div dangerouslySetInnerHTML={{ __html: eventData.speaker_section_description }} className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummySpeakers.map((speaker, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{speaker.name}</h3>
            <p className="text-gray-600">{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;