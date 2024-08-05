// EventDetails.js
import React from 'react';

function EventDetails({ eventData }) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Event Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="mb-2"><span className="font-semibold">Date:</span> {eventData.start_date} to {eventData.end_date}</p>
          <p className="mb-2"><span className="font-semibold">Time:</span> {eventData.start_time} - {eventData.end_time}</p>
          <p className="mb-2"><span className="font-semibold">Time Zone:</span> {eventData.time_zone}</p>
          <p className="mb-2"><span className="font-semibold">Type:</span> {eventData.is_virtual ? 'Virtual' : 'In-person'}</p>
        </div>
        <div>
          <p className="mb-2"><span className="font-semibold">Expected Attendees:</span> {eventData.expected_attendees}</p>
          <p className="mb-2"><span className="font-semibold">Organizer:</span> {eventData.organiser_name}</p>
          <p className="mb-2"><span className="font-semibold">Contact:</span> {eventData.organiser_email}</p>
          <p className="mb-2">
            <span className="font-semibold">Website:</span> 
            <a href={eventData.event_website} className="text-blue-600 hover:underline ml-1">{eventData.event_website}</a>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-indigo-600">About the Event</h3>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: eventData.description }} />
      </div>
    </section>
  );
}

export default EventDetails;