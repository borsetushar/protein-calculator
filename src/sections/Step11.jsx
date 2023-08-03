import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Step11 = ({onNext,weight,bodyType, activityLevel }) => {
    const [proteinIntake, setProteinIntake] = useState(0);
    const [gender, setGender] = useState('male');
    const [isModalOpen, setIsModalOpen] = useState(false);



    const calculateProteinIntake = () => {
        let proteinIntake = 0.8 * weight; // Default protein intake for male
    
        if (gender === 'female') {
          // Adjust protein intake for female
          proteinIntake -= 10;
        }
    
        if (bodyType === 'endomorph') {
          // Adjust protein intake based on body type
          proteinIntake *= 1.5;
        } else if (bodyType === 'mesomorph') {
          proteinIntake *= 2.2;
        } else if (bodyType === 'ectomorph') {
          proteinIntake *= 1.7;
        }
    
        
        setProteinIntake(proteinIntake);
        console.log( proteinIntake)
        setIsModalOpen(true);
      };

    const handleNext = () =>{
        // Do any processing or validation if needed for Step1
        onNext(); // Notify the parent component to move to the next slide
    }

  return (
        <div>
                <h2 className="text-2xl font-sans mb-4 text-gray-800">section 4</h2>
                <h3 className="text-2xl font-sans mb-4 text-gray-800">know your potein intake by Clicking on the Button</h3>
                     <div className="flex flex-col items-start justify-center gap-4 lg:pl-[10%] lg:pr-[10%] md:pl-[14%] md:pr-[14%]">
                        <div className='ml-[25%] w-[50%]'>
                        <div className=" border border-blue-500 p-3 rounded-md bg-black text-white  transition-colors"style={{height:'50px'}} >
                           <button  onClick={calculateProteinIntake}>Calculate Result</button>
                        </div>
                        </div>
                         {proteinIntake !== 0 && <p>You should consume {proteinIntake} grams of protein per day.</p>} 
                        {/* <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            proteinIntake={proteinIntake}
                        /> */}
                    </div>
        </div>
  )
}

export default Step11