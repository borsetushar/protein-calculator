import React from 'react'
import { useNavigate } from 'react-router-dom';

const Step4 = ({onNext}) => {

    const navigate = useNavigate();

    const handleNext = () =>{
         // Do any processing or validation if needed for Step1
        onNext(); // Notify the parent component to move to the next slide
       
    }

  return (
        <div >
                <h2 className="text-2xl font-sans mb-4 text-gray-800">section 4</h2>
                <h3 className="text-2xl font-sans mb-4 text-gray-800">What Is Your General Activity Level Other Than Workouts?</h3>
                    <div className="flex flex-col items-start justify-center gap-4 lg:pl-[20%] lg:pr-[20%] md:pl-[27%] md:pr-[27%]">
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'90px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Sedentary: </b> drive to work, sitting at desk job majority of day, no significant activity outside of workouts</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer" style={{height:'90px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Light Activity:</b> walk or bike to work (more than 20 minutes), sitting most of the day, some activity during/after work</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'90px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Moderate Activity: </b> mostly standing at work and walking (restaurant work, teacher, coach...)</p>
                        </div>
                        <div className="border border-gray-500 p-4 rounded-lg w-full cursor-pointer hover:cursor-pointer"style={{height:'90px'}} onClick={handleNext}>
                            <p className="text-sm text-left"><b>Highly Active:</b> work a very physical job (construction, landscaping...)</p>
                        </div>
                    </div>

        </div>
  )
}

export default Step4