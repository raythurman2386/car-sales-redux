import React from 'react'
import { connect, useSelector } from 'react-redux'
import { removeFeature } from '../actions'

import AddedFeature from './AddedFeature'

const AddedFeatures = props => {
  const car = useSelector(state => state.car)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  }

  return (
    <div className='content'>
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type='1'>
          {car.features.map(item => (
            <AddedFeature
              key={item.id}
              removeFeature={removeFeature}
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

export default connect(
  null,
  { removeFeature }
)(AddedFeatures)
