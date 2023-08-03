import React, { useRef,useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step4 from './Step4';
import Step3 from './Step3';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';

SwiperCore.use([Navigation]);


const Sections = () => {
    const [proteinIntake, setProteinIntake] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [bodyType, setBodyType] = useState('ectomorph');
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();
    const swiperRef = useRef(null);


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

    const handleGenderChange = (selectedGender) => {
      setGender(selectedGender);
    };
  
    const handleWeightChange = (enteredWeight) => {
      setWeight(enteredWeight);
    };
  
    const handleBodyTypeChange = (selectedBodyType) => {
      setBodyType(selectedBodyType);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
        if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        console.log("handleNextSlide calling")
      };



  const handleCancelButton = ()=>{
    navigate("/")
  }

  return (
    <>
    <h1 className="text-2xl mt-8 mb-4">Promix Protein Calculator <sup>TM</sup> </h1>
    <div className="absolute top-2 right-2">
       <FaTimes className="text-red-500 cursor-pointer" onClick={handleCancelButton} />
     </div>
        <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={1} 
        className={`mySwiper ${window.innerWidth <= 768 ? 'hide-arrows-mobile' : ''}`}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            
        <SwiperSlide> <Step1 onNext={handleNextSlide} gender={gender} handleGenderChange={handleGenderChange}/> </SwiperSlide>
        <SwiperSlide> <Step2 onNext={handleNextSlide} weight={weight} handleWeightChange={handleWeightChange}/> </SwiperSlide>
        <SwiperSlide> <Step3 onNext={handleNextSlide} bodyType={bodyType} handleBodyTypeChange={handleBodyTypeChange}/> </SwiperSlide>
        <SwiperSlide> <Step11 onNext={handleNextSlide} proteinIntake={proteinIntake}  weight={weight} bodyType={bodyType} /> </SwiperSlide>
        </Swiper>
    </>

  );
};

export default Sections