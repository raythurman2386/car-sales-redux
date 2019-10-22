import React from 'react'
import { connect, useSelector } from 'react-redux'
import { buyItem } from '../actions'
import AdditionalFeature from './AdditionalFeature'

const AdditionalFeatures = props => {
  const additionalFeatures = useSelector(state => state.additionalFeatures)

  const buyItem = item => {
    // dipsatch an action here to add an item
    // e.preventDefault()
    props.buyItem(item)
  }

  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type='1'>
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} buyItem={buyItem} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

export default connect(
  null,
  { buyItem }
)(AdditionalFeatures)
