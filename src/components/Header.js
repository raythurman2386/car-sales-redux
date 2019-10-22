import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const car = useSelector(state => state.car)

  return (
    <>
      <figure className='card-image'>
        <img src={car.image} alt={car.name} />
      </figure>
      <div className='card-header'>
        <h2 className='card-header-title'>{car.name}</h2>
        <p className='card-header-title'>Amount: ${car.price}</p>
      </div>
    </>
  )
}

export default Header
