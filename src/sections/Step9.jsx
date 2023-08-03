import React from 'react'
import { useNavigate } from 'react-router-dom';

const Step9 = ({onNext}) => {
    const navigate = useNavigate();
    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
        onNext(); // Notify the parent component to move to the next slide
    }

  return (
            <div >
                <h2 className="text-2xl font-sans mb-4 text-gray-800">section 9</h2>
                <h3 className="text-2xl font-sans mb-4 text-gray-800">What kind of cardio do you enjoy?</h3>
                    <div className="flex flex-col items-start justify-center gap-4 lg:pl-[10%] lg:pr-[10%] md:pl-[15%] md:pr-[15%]">
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Light intensity</b>(brisk walking, jogging, aerobics, Zumba)</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Moderate intensity</b> (stair climbing, running, cycling, swimming, rowing)</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'70px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>High intensity interval training</b>(sprints, hills, plyometrics)</p>
                        </div>
                    </div>
            </div>
  )
}

export default Step9