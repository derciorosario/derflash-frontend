import React,{useEffect,useState} from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useData } from '../../contexts/DataContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import VideoBg from '../../assets/videos/ov.mp4'



function App() {
 
  const data=useData()
  const { t, i18n } = useTranslation();

  const navigate = useNavigate()

  return (
   
       <DefaultLayout page="home">
         
        
              <div class="relative h-screen w-[100%]  overflow-hidden bg-gray-900">
                    <video
                      autoPlay
                      muted
                      onCanPlayThrough={()=>{
                        data.setBgVideoLoaded(true)
                      }}
                      loop
                      class="absolute z-0  top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    >
                          <source src={VideoBg} type="video/mp4"/>
                          Your browser does not support the video tag.
                    </video>
                    <div class="relative p-5 z-0 flex flex-col items-center justify-center h-full text-white text-center">
                      <p className="w-[220px] mt-5 text-[0.8rem] opacity-70">{t('common.software-development-comapny')}</p>
                      <h1 class="text-[3rem] mt-4 max-md:text-[30px] font-bold max-w-[600px] max-md:w-[90%]">{t('hero-title')}</h1>
                      <div className="bg-gray-100 w-[30px] h-[2px] mt-5 md:hidden"></div>
                    </div>
            </div>


       </DefaultLayout>
  );
}

export default App;
