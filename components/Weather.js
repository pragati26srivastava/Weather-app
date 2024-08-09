import Image from 'next/image'
import React from 'react'

const Weather = ({info}) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-100 m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
            <Image 
                src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} 
                alt={`Weather icon for ${info.weather[0].main}`}
                width='100'
                height='100'
            />
            <p className='text-xl'>
                {info.weather[0].main}
            </p>
        </div>
        <div>
          <p className=' text-5xl md:text-9xl'>
            {info.main.temp.toFixed(1)}&#176;C
          </p>
        </div>
        
        
      </div>
      
      <div className='flex justify-between pt-7'>
        <p className='text-2xl'>Humidity: {info.main.humidity}%</p>
        <p className='text-2xl'>Feels like: {info.main.feels_like.toFixed(1)}&#176;C</p>
      </div>
        <div className='flex justify-center pt-10'>
            <p className='text-6xl uppercase'>{info.name}</p>
        </div>
     
    </div>
  )
}

export default Weather
