import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


const Header = () => {

  const car = useSelector((state) => state.car)

  // console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default Header;
