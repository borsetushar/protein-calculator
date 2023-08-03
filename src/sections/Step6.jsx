import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Step6 = ({onNext}) => {
    const [age, setAge] = useState('');

    const handleAgeChange = (e) => {
        setAge(e.target.value);
      };

    const navigate = useNavigate();

    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
        onNext(); // Notify the parent component to move to the next slide
    }

  return (
    <div>
    <h2>Section 3</h2>
    <h3 className="text-2xl font-sans mb-4 text-gray-800">What is your age?</h3>
  
    <div className="p-4 bg-white justify-center rounded-lg flex flex-col md:flex-row items-center md:space-x-4">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
        <label htmlFor="age">Age:</label>
        <div className="relative w-full md:w-24">
          <input
            type="number"
            id="age"
            className="border rounded-md p-2 w-full md:w-16"
            value={age}
            onChange={handleAgeChange}
            min={1}
            max={120} // Adjust the max value based on your needs
          />
        </div>
      </div>
  
      <button onClick={handleNext} className="px-4 py-2 rounded-md bg-gray-800 text-white">
        Next
      </button>
    </div>
  </div>
  )
}

export default Step6