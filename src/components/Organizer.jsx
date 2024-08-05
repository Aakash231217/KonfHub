// src/components/Organizer.js
import React from 'react';

function Organizer({ organizer }) {
  if (!organizer) return null;

  return (
    <div className="organizer">
      <h2>Event Organizer</h2>
      <img src={organizer.organiser_image_url} alt={organizer.organiser_name} />
      <h3>{organizer.organiser_name}</h3>
      <p>Email: {organizer.organiser_email}</p>
      <p>Phone: {organizer.organiser_dial_code} {organizer.organiser_phone}</p>
      <p>Website: <a href={organizer.organiser_website} target="_blank" rel="noopener noreferrer">{organizer.organiser_website}</a></p>
      <div dangerouslySetInnerHTML={{ __html: organizer.organiser_info }}></div>
      <div className="social-links">
        {organizer.organizer_twitter_url && <a href={organizer.organizer_twitter_url} target="_blank" rel="noopener noreferrer">Twitter</a>}
        {organizer.organizer_linkedin_url && <a href={organizer.organizer_linkedin_url} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        {organizer.organizer_facebook_url && <a href={organizer.organizer_facebook_url} target="_blank" rel="noopener noreferrer">Facebook</a>}
      </div>
    </div>
  );
}

export default Organizer;