import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BUY_ITEM } from '../actions'
import AdditionalFeature from './AdditionalFeature'

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  const dispatch = useDispatch()

  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type='1'>
          {additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              buyItem={() => dispatch({ type: BUY_ITEM, payload: item })}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

export default AdditionalFeatures
