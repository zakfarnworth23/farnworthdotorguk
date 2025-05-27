import React from 'react';
import { Tag } from 'govuk-react';

const skills = ['React', 'Next.js', 'Azure', 'Power Platform', 'SharePoint', 'Jamf', 'Entra ID'];

const Skills = () => (
  <div className="govuk-width-container govuk-!-margin-top-6">
    <h2 className="govuk-heading-l">Skills & Tools</h2>
    <ul className="govuk-list">
      {skills.map((skill) => (
        <li key={skill}>
          <Tag>{skill}</Tag>
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
