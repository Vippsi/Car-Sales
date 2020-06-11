import React from 'react';
import { useSelector } from 'react-redux'

const Total = props => {

  // const price = useSelector(state => state.car.price)
  // const additionalPrice = useSelector(state => state.additionalPrice)
  const  relevantInfo = useSelector(state => {
    return {
      price: state.car.price,
      additionalPrice: state.additionalPrice
    }
  })

  return (
    <div className="content">
      <h4>Total Amount: ${relevantInfo.price + relevantInfo.additionalPrice}</h4>
    </div>
  );
};

export default Total;
