import React from 'react'

import LoadingImg from '../../assets/images/logos/lg-white-1.png'
import { useData } from '../../contexts/DataContext'

function Preloader() {
  const data=useData()
  return (
    <div style={{zIndex:99}} className={`flex items-center bg-[#111] ${(!data.bgVideoLoaded || data.isLoading) ? '' : 'opacity-0 pointer-events-none'} delay-100 ease-in transition-all flex-col justify-center fixed w-full h-[100vh]`}>
           
           <img width={40} src={LoadingImg}/>
           <div class="loading-dots absolute bottom-[100px]">
              <div style={{display:'none'}} class="loading-dots-dot"></div>
              <div class="loading-dots-dot"></div>
              <div style={{display:'none'}} class="loading-dots-dot"></div>
           </div>

    </div>
  )
}

export default Preloader