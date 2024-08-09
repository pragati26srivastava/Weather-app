import axios from 'axios'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import Spinner from '@/components/Spinner'
import bg from '../images/bg.jpg'
import {BsSearch} from 'react-icons/bs'
import Weather from '@/components/Weather'
 
export default function Home() {
  const bgImage='/images/bg.jpg'

  const [city,setCity]=useState('');
  const [weather,setWeather]=useState({})
  const [loading,setLoading]=useState(false)
   
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`

  const getWeather = (e) =>{
    e.preventDefault()
    if(city.trim()===''){
      alert('Please enter a city name')
      return;
    }
    setLoading(true)
    axios.get(url).then((res)=>{
      setWeather(res.data)
    })
    .catch((error) =>{
      if(error.response && error.response.status === 404){
        alert('City not found. Please enter valid city name')
      } else {
        console.log(error)
      }
    })
    setCity('')
    setLoading(false)
  }

  if(loading){
    return (
      <div>
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-[1]'/>
        <Image 
          src={bg} 
          alt="Background image" 
          layout="fill"
          className='object-cover'
          />
        <Spinner/>
      </div>
    )
    
  } else{
    return (
      <div>
        <div 
          className='absolute top-0 left-0 w-full h-full bg-black/30 z-[1]'
        />
        <Image 
          src={bg} 
          alt="Background image" 
          layout="fill"
          className='object-cover'
          />
  
        <div className='relative flex flex-col items-center justify-between max-w-[500px] w-full m-auto py-4 text-white z-10'>
          <form onSubmit={getWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-gray-300 rounded-2xl'>
            <div>
              <input 
              className='bg-transparent outline-none text-gray-300 text-xl font-semibold transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100'
              type="text" 
              placeholder='City Name?'
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              />
            </div>
            <button onClick={getWeather}>
              <BsSearch size={30}/>
            </button>
          </form>
        </div>
  
        {weather.main && (
          <Weather info={weather}/>
        )}
  
  
      </div>
    )
  }
}
