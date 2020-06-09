import { ADD_FEATURE } from "../actions/carActions"
import { REMOVE_FEATURE } from "../actions/carActions"
import AdditionalFeatures from "../components/AdditionalFeatures"

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
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            const newPrice = state.additionalPrice + action.payload.price
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: newPrice,
                car:{
                    ...state.car,
                    
                    features:[...state.car.features, action.payload]},
                    
                additionalFeatures:[
                    ...state.additionalFeatures.filter((mod) => mod.id !== action.payload.id )
                ]
            }
            case REMOVE_FEATURE:
                const updatedPrice = state.additionalPrice - action.payload.price
                return{
                    ...state,
                    additionalPrice: updatedPrice,
                    car:{
                        ...state.car,
                        features:[
                            ...state.car.features.filter((mod) => mod.id !== action.payload.id)]},
                    
                            additionalFeatures:[
                                ...state.additionalFeatures, action.payload
                            ]    
                }
        default:
            return state
    }
}