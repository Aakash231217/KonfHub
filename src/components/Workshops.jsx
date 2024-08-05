// Workshops.js
import React from 'react';

function Workshops({ eventData }) {
  // Note: The API doesn't provide workshop data, so we'll create placeholders
  const dummyWorkshops = [
    { title: 'Introduction to React', duration: '2 hours' },
    { title: 'Advanced Node.js', duration: '3 hours' },
    { title: 'UI/UX Design Principles', duration: '2.5 hours' },
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{eventData.workshop_section_title}</h2>
      <div dangerouslySetInnerHTML={{ __html: eventData.workshop_section_description }} className="mb-6" />
      <div className="space-y-4">
        {dummyWorkshops.map((workshop, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{workshop.title}</h3>
            <p className="text-gray-600">Duration: {workshop.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workshops;