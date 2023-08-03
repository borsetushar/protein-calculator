import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Step1 = ({onNext, gender, handleGenderChange}) => {
  //const [gender, setGender] = useState('male');

  const navigate = useNavigate();


  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };

  const handleNext = () =>{
    // Do any processing or validation if needed for Step1
    onNext(); // Notify the parent component to move to the next slide
}

      return (
                <div>
                        <h2>Step 1</h2>
                         <h3 className="text-2xl font-sans mb-4 text-gray-800">Are You <b>Male</b> or <b>Female</b> ??</h3>
                         
                        <div className="p-4 bg-white  rounded-lg flex items-center justify-center space-x-4">
                            
                            <select
                            id="gender"
                            className="border rounded-md p-2"
                            value={gender}
                            onChange={(e) => handleGenderChange(e.target.value)}
                            >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                            <button
                            onClick={handleNext}
                            className="px-4 py-2  rounded-md bg-gray-800 text-white "
                            >
                            Next
                            </button>
                        </div>
                        
          </div>
  )
}

export default Step1