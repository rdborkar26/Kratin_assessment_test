import React, { useEffect, useState } from 'react';

const MedicationList = () => {

  const [medicineData, setMedicineData] = useState([]);
  console.log(Array.isArray(medicineData))
  useEffect(() => {
    const storedData = localStorage.getItem('medicationData');
    console.log("Stored data"+storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setMedicineData(parsedData)

      if (Array.isArray(parsedData)) {
        parsedData.forEach(medication => {
          const { time, medicine } = medication;

          const alarmTime = new Date(time);

          const currentTime = new Date();
          const timeDifference = alarmTime.getTime() - currentTime.getTime();
          console.log(timeDifference)

          if (timeDifference > 0) {
            setTimeout(() => {
              // Trigger the notification or alert here
              alert(`Time to take ${medicine}!`);
            }, timeDifference);
          }
        });
      }
    }
  }, []);

  return (
    <div>
      <h2>Medication List</h2>
      {/* Render the medication list table */
      console.log(medicineData)
      }
      
    </div>
  );
};

export default MedicationList;
