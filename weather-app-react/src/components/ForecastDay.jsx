import React from 'react'

function ForecastDay({data}) {
  //console.log(data)
  return (
    <div className='shadow text-center'>
       <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width="100px" alt="" />
       <small>{data.dt_txt}</small>
      <p>{data.main.temp}°C</p>
    </div>
  )
}

export default ForecastDay