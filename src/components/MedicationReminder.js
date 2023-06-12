import React from 'react';

const MedicationReminder = ({ medication, time }) => {
  return (
    <div>
      <h3>Medication Reminder</h3>
      <p>It is your time to take {medication}.</p>
      <p>Time: {time}</p>
      {/* Add reminders and interactions for better ui/ux */}
    </div>
  );
};

export default MedicationReminder;
