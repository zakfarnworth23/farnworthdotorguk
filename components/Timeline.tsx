import React from 'react';

const milestones = [
  { year: '2020', text: 'Joined IT Services as Apprentice Technician' },
  { year: '2021', text: 'Promoted to Support Analyst' },
  { year: '2023', text: 'Led SharePoint and Jamf deployments' },
];

const Timeline = () => (
  <div className="govuk-width-container govuk-!-margin-top-6">
    <h2 className="govuk-heading-l">Career Timeline</h2>
    <ul className="govuk-list govuk-list--bullet">
      {milestones.map(({ year, text }) => (
        <li key={year}>
          <strong>{year}:</strong> {text}
        </li>
      ))}
    </ul>
  </div>
);

export default Timeline;
