import React from 'react'
import drink from '../assests/drinking.jpg'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Calculator = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () =>{
    navigate('/startcalculator')
  }

  return (
    <div>
      <Header/>
    <div className="flex justify-center lg:p-[21%] lg:mt-[-21%] overflow-hidden" >
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-7 justify-center">
        <div>
          <img src={drink} alt="drinking" className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-sans mb-4">Promix Protein Calculator</h1>
          <h2 className="text-gray-600 mb-4 mr-6">
           How much protein do you need ?
          </h2>
          <button className="px-4 py-2 lg:ml-12 bg-transparent text-blue-500 border border-blue-500 rounded-md hover:bg-black hover:text-white lg:w-[50%] transition-colors" onClick={handleButtonClick}>
            Start Calculator
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Calculator