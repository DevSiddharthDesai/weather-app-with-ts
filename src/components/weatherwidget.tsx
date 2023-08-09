import React from 'react'

const Weatherwidget = ({data}: any) => {
  return (
    <div className="card shadow-0 border">
          <div className="card-body p-4">
            <h4 className="mb-1 sfw-normal">{data.cityname}, {data.country}</h4>
            <p className="mb-2">Current temperature: <strong>{data.temp}°C</strong></p>
            <p>Max: <strong>{data.temp_max}°C</strong>, Min: <strong>{data.temp_min}°C</strong></p>
          </div>
        </div>
  )
}

export default Weatherwidget