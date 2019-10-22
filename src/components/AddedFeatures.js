import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FEATURE } from '../actions'

import AddedFeature from './AddedFeature'

const AddedFeatures = props => {
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  return (
    <div className='content'>
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type='1'>
          {car.features.map(item => (
            <AddedFeature
              key={item.id}
              removeFeature={() =>
                dispatch({ type: REMOVE_FEATURE, payload: item })
              }
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  )
}

export default AddedFeatures
