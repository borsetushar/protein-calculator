import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const StartCalculator = () => {
  const navigate = useNavigate();

  const handleButtonClick =()=>{
    navigate('/sections')
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mt-8 mb-4">Promix Protein Calculator <sup>TM</sup> </h1>
      <div className="flex flex-col md:flex-row p-4 gap-6 lg:pr-[14%] lg:pl-[14%]">
        <div className="absolute top-2 right-2">
          <FaTimes className="text-red-500 cursor-pointer" />
        </div>
        {/* First Div */}
        <div className="bg-white p-4 border border-gray-500 flex-1 lg:w-[30%] text-left" style={{borderRadius:'10px'}} >
          <h1 className="text-xl font-semibold mb-2">General Fitness Protein Calculator</h1>
          <p className="text-gray-600 mb-4">
          <b> Best For: </b> You go to the gym a few times per week and enjoy a variety of workout types or classes.
          </p>
          <button className="px-4 py-2  border border-blue-500 rounded-md bg-black text-white lg:w-[37%] transition-colors" onClick={handleButtonClick}>
            Start Calculator
          </button>
        </div>

        {/* Second Div */}
        <div className="bg-white p-4 border border-gray-500 flex-1 lg:w-[30%] text-left" style={{borderRadius:'10px'}} >
          <h1 className="text-xl font-semibold mb-2">Experienced Lifter Protein Calculator</h1>
          <p className="text-gray-600 mb-4">
          <b> Best For: </b> You go to the gym 3x/week or more and have specific strength or performance goals.
          </p>
          <button className="px-4 py-2  border border-blue-500 rounded-md bg-black text-white lg:w-[37%] transition-colors" onClick={handleButtonClick}>
            Start Calculator
          </button>
        </div>
      </div>
    </div>  

  )
}

export default StartCalculator