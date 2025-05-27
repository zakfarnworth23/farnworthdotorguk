'use client';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.section
      className="govuk-width-container govuk-!-margin-top-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="govuk-heading-xl">About Me</h1>
      <p className="govuk-body-l">
        I'm Zak, a technology professional focused on improving digital services in the public sector. I care about usability, security, and delivering value quickly.
      </p>
      <div className="govuk-inset-text">
        Passionate about working across teams, empowering users, and building systems that actually make things easier.
      </div>
    </motion.section>
  );
}
