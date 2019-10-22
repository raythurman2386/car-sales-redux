import React from 'react'
import { connect } from 'react-redux'
import { buyItem } from '../actions'
import AdditionalFeature from './AdditionalFeature'

const AdditionalFeatures = props => {
  const buyItem = item => {
    // dipsatch an action here to add an item
    // e.preventDefault()
    props.buyItem(item)
  }

  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type='1'>
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} buyItem={buyItem} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeatures)
