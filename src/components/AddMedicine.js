import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

const AddMedicine = () => {


  const [medicine, setMedicine] = useState('');
  const [time, setTime] = useState('');
  const [dosage, setDosage] = useState('');
  const [slot, setSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = {
      medicine: medicine,
      time: time,
      dosage: dosage,
      slot: slot,
    };
    //     // Convert the form data to a JSON string
    const jsonData = JSON.stringify(formData);

    console.log("add medicine ="+jsonData);

    // // Store the JSON data in local storage
    localStorage.setItem('medicationData', jsonData);




    // Clear the form fields
    setMedicine('');
    setTime('');
    setDosage('');
    setSlot('');
  };

  const resetData = () => {
    setMedicine('');
    setTime('');
    setDosage('');
    setSlot('');
  }


  return (
    <>
      <Navbar />
      <div className=" form-center mx-auto col-10 col-md-8 col-lg-6 ">
        <h2>Add new Medication</h2>

        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label> Medicine Name:
              <input type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} required /> </label>
          </div>

          <div className="my-2">
            <label> Medicine Time:
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required /> </label>
          </div>

          <div className="my-2">
            <label> Dosage:
              <input type="number" value={dosage} onChange={(e) => setDosage(e.target.value)} required />
            </label>
          </div>

          <div className="my-2">
            <label>  Slot:
              <select value={slot} onChange={(e) => setSlot(e.target.value)}>
                <option value="">Select Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </label>
          </div>

          <div className="container bg-light my-3">
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-success my-2 mx-3">Submit</button>
              <button type="cancle" onClick={resetData} className="btn btn-warning my-3">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-12 text-center">
      <a href="/showlist" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Show All medicines</a>
      </div>
      
    </>
  )
}

export default AddMedicine
