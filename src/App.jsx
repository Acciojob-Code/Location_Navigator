import { useState } from 'react'



function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [month, setMonth] = useState(()=>(new Date().getMonth()+1));
  const[hemisphere,setHemisphere]=useState("");
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      let lat = position.coords.latitude
      let long = position.coords.longitude
      if(lat>0){
        setHemisphere("Northern Hemisphere")
      }else if(long<0){
        setHemisphere("Southern Hemisphere")
      }else{
        setHemisphere("Equatorial")
      }
    });

  }else{
    alert("Geolocation is not supported by this browser.");
  }

  return (
    <>
     <h1>latitude : {latitude}</h1>
     <h1>longitude : {longitude}</h1>
     <h1>Month : {month}</h1>
     <h1>Hemisphere : {hemisphere}</h1>
     {
       month===12 || month<=2? <h1>Winter</h1> :
       month===3 || month<=5? <h1>Spring</h1> :
       month===6 || month<=8? <h1>Summer</h1> :
       month===9 || month<=11? <h1>Autumn</h1> :
       ""
     }
    </>
  )
}

export default App
