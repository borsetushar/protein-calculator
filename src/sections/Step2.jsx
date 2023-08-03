import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Step2 = ({onNext, weight, handleWeightChange}) => {
     

    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
    onNext(); // Notify the parent component to move to the next slide
    }


  return (
    <div>
    <h2>Step 2</h2>
    <h3 className="text-2xl font-sans mb-4 text-gray-800">What is your body weight?</h3>
  
    <div className="p-4 bg-white justify-center rounded-lg flex flex-col md:flex-row items-center md:space-x-4">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
        <label htmlFor="bodyWeight">Body Weight:</label>
        <div className="relative w-full md:w-auto">
          <input
            type="number"
            id="bodyWeight"
            className="border rounded-md p-2 w-full md:w-24 pr-8" // Added w-full and md:w-24 for responsiveness
            value={weight}
            onChange={(e) => handleWeightChange(e.target.value)}
            min={1}
            max={200} // Adjust the max value based on your needs
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">kg</span>
        </div>
      </div>
  
      <button onClick={handleNext} className="px-4 py-2 rounded-md bg-gray-800 text-white">
        Next
      </button>
    </div>
  </div>
  

  
  )
}

export default Step2;