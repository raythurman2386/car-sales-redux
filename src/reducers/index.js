import { REMOVE_FEATURE, BUY_ITEM } from '../actions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-8 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case REMOVE_FEATURE:
      // Remove will have an id of the item that needs removed
      const updatedFeatures = state.car.features.filter(
        feature => feature.id !== action.payload.id
      )
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: updatedFeatures
        }
      }

    case BUY_ITEM:
      return {
        additionalFeatures: state.additionalFeatures.filter(
          feature => feature.id !== action.payload.id
        ),
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      }
    // When you buy the item you're buying is passed into the action
    // The new feature will be added to the car.features array
    default:
      return state
  }
}
