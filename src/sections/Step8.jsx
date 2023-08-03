import React from 'react'
import { useNavigate } from 'react-router-dom';

const Step8 = ({onNext}) => {
    const navigate = useNavigate();

    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
        onNext(); // Notify the parent component to move to the next slide
    }

  return (
            <div >
                    <h2 className="text-2xl font-sans mb-4 text-gray-800">section 8</h2>
                    <h3 className="text-2xl font-sans mb-4 text-gray-800">How often do you perform cardiovascular exercise each week?</h3>
                    <div className="flex flex-col items-start justify-center gap-4 lg:pl-[13%] lg:pr-[13%] md:pl-[27%] md:pr-[27%]">
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>I do not do cardio</b></p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>1-2 times</b> per week</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>3-4 times</b> per week</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>4+ times</b> per week</p>
                        </div>
                    </div>
            </div>
  )
}

export default Step8