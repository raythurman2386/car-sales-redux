import React from 'react'
import { useSelector } from 'react-redux'

import AddedFeature from './AddedFeature'

const AddedFeatures = () => {
  const car = useSelector(state => state.car)

  return (
    <div className='card-content'>
      <h6 className='title is-5'>Added features:</h6>
      {car.features.length ? (
        <ol type='1'>
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  )
}

export default AddedFeatures
