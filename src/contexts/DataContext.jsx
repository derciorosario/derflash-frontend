import { createContext, useContext,useState,useEffect} from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [bgVideoLoaded,setBgVideoLoaded] = useState(false);


    let initial_popups={
      global_search:false,
      show_specialist_list:false,
      show_doctors_list:false,
      sidebar:false,
      feedback:false,
      lang:false,
      basic_popup:false,
      doctor_reuqest_sent:false,
      doctor_reuqest_form:false,
      reviews:false
    }


    const [_openPopUps, _setOpenPopUps] = useState(initial_popups);
  
    function _closeAllPopUps(){
          _setOpenPopUps(initial_popups)
          document.removeEventListener('click', handleOutsideClick)
    }
 
    const handleOutsideClick = (event) => {
    
      let close=true
      Object.keys(initial_popups).forEach(f=>{
          if(event?.target?.closest(`._${f}`))  {
            close=false
          }
      })
  
      if(close){
        document.removeEventListener('click', handleOutsideClick); 
        _closeAllPopUps()
      }
      
    };
  
    const  _showPopUp = (option,value) => {
        setTimeout(()=>document.addEventListener('click', handleOutsideClick),200)
        _setOpenPopUps({...initial_popups,[option]:value || true})
      
    }

    const [selectedSidePage,setSelectedSidePage]=useState(null)
    const [showContact,setShowContact]=useState(false)

    const value = {
      showContact,
      setShowContact,
      selectedSidePage,
      setSelectedSidePage,
      _showPopUp,
      _closeAllPopUps,
      _openPopUps,
      handleOutsideClick,
      _setOpenPopUps,
      makeRequest,
      bgVideoLoaded,
      setBgVideoLoaded,
      isLoading,
      setIsLoading
    };

    useEffect(()=>{
          setTimeout(()=>{
                     setIsLoading(false)
          },[1000])
    },[])

    async function makeRequest(options={data:{},method:'get'},maxRetries = 200, retryDelay = 3000) {
    let postData=options.data ? options.data : {}
   
    try {
     let response 
     let headers={
      'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
     }

     if(options.method=="post") {
          response = await axios.post(`${APP_BASE_URL}/`+options.url,postData,{headers}); 
     }else if(options.method=="delete"){
          response = await axios.delete(`${APP_BASE_URL}/`+options.url,{headers});
     }else{
          response = await axios.get(`${APP_BASE_URL}/`+options.url,{headers});
     }
      return response.data;

    } catch (error) {
      console.error('Error fetching data:', error);

      if (maxRetries > 0) {
            await new Promise(resolve => setTimeout(resolve, retryDelay)); 
            return makeRequest(options, maxRetries - 1, retryDelay); 
      } else {
            throw error; 
      }
       
    }
}
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
   return useContext(DataContext);
};