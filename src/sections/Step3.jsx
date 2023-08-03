import React from 'react'
import Ectomorph from '../assests/ectomorph.png';
import Mesomorph from '../assests/mesomorph.png';
import Endomorph from '../assests/endomorph.png';
import { useNavigate } from 'react-router-dom';

const Step3 = ({onNext, bodyType, handleBodyTypeChange}) => {

    const handleNext = () =>{
         // Do any processing or validation if needed for Step1
         onNext(); // Notify the parent component to move to the next slide
    }
  return (
    <div >
                    <h2 className="text-2xl font-sans mb-4 text-gray-800">Step 3</h2>
                    <h3 className="text-2xl font-sans mb-4 text-gray-800">What is your Body type ??</h3>
                    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:gap-4">
                        {/* First Div */}
                        <div className="bg-white p-1 rounded-lg md:w-64 cursor-pointer hover:cursor-pointer" onClick={() => {
                            handleBodyTypeChange('ectomorph');
                            handleNext(); // Call handleNext after handling body type change
                        }}>
                        <img src={Ectomorph} alt="Image 1" className="w-50 h-auto mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-center mb-2">Ectomorph</h2>
                        <ul className="text-gray-600 list-disc text-sm list-inside">
                            <li>You are naturally thin and struggle to gain weight or muscle (hardgainer).</li>
                            <li>You can eat large amounts of food but your weight or muscle mass doesn't change much.</li>
                            <li>You have long/skinny arms and legs (typically narrow wrists or small calves).</li>
                        </ul>
                        </div>

                        {/* Second Div */}
                        <div className="bg-white p-1 rounded-lg md:w-64 cursor-pointer hover:cursor-pointer" onClick={() => {
                            handleBodyTypeChange('ectomorph');
                            handleNext(); // Call handleNext after handling body type change
                        }}>
                        <img src={Mesomorph} alt="Image 2" className="w-50 h-auto mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-center mb-2">Mesomorph</h2>
                        <ul className="text-gray-600 list-disc text-sm list-inside">
                            <li>You are an average sized build, not overly skinny and not overly wide.</li>
                            <li>You have a relatively small waist/hips and wider shoulders.</li>
                            <li>You look generally fit, but can add or lose weight, as fat or muscle, depending on your diet and training.</li>
                        </ul>
                        </div>

                        {/* Third Div */}
                        <div className="bg-white p-1 rounded-lg md:w-64 cursor-pointer hover:cursor-pointer" onClick={() => {
                            handleBodyTypeChange('ectomorph');
                            handleNext(); // Call handleNext after handling body type change
                        }}>
                                        <img src={Endomorph} alt="Image 3" className="w-50 h-auto mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-center mb-2">Endomorph</h2>
                        <ul className="text-gray-600 list-disc text-sm list-inside">
                            <li>You are naturally a stockier/wider build. You have shorter limbs (arms/legs). Your calves or forearms are naturally fairly large.</li>
                            <li>You can gain weight as muscle or fat relatively easily, but it is often hard to lose weight</li>
                        </ul>
                        </div>
                    </div>
                    </div>
  )
}

export default Step3