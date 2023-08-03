import React from 'react'
import { useNavigate } from 'react-router-dom';

const Step5 = ({onNext}) => {
    const navigate = useNavigate();


    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
    onNext(); // Notify the parent component to move to the next slide
    }
    
  return (
         <div >
                <h2 className="text-2xl font-sans mb-4 text-gray-800">section 5</h2>
                <h3 className="text-2xl font-sans mb-4 text-gray-800">How Many Workouts Do You Do Each Week?</h3>
                <div className="flex flex-col items-start justify-center gap-4 lg:pl-[10%] lg:pr-[10%] md:pl-[15%] md:pr-[15%]">
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>0-2 Workouts </b>per week</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>3-4 Workouts</b> per week</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>6+ Workouts </b>per week</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Professional or collegiate athlete</b> In strength or conditioning based sport</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left">Recovering from a serious <b>injury</b></p>
                        </div>
                </div>
         </div>
  )
}

export default Step5