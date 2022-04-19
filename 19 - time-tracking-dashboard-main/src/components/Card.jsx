import React from 'react'
import ellipsis from '../images/icon-ellipsis.svg'
import { ColorDiv } from '../styles/STYLED/index'
import data from '../DATA/data.json'

function Card({ id, chave, title, image, time }) {
  return (
    <ColorDiv id={id} className="container_colors">
      <img className="background_icon" src={image} alt="" />
      <div className={'container_data'}>
        <div id="div_left">
          <h1>{title}</h1>
          <p>{data[chave].timeframes[time].current}hrs</p>
        </div>
        <div id="div_right">
          <img src={ellipsis} alt="" />
          <p>
            Last{' '}
            {time === 'daily' ? 'Day' : time === 'weekly' ? 'Week' : 'Month'} -{' '}
            {data[chave].timeframes[time].previous}hrs
          </p>
        </div>
      </div>
    </ColorDiv>
  )
}

export default Card
