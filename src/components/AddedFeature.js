import React from 'react';
// import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { removeFeature } from '../actions/carActions'

const AddedFeature = props => {
  const dispatch = useDispatch()
  console.log(props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => dispatch(removeFeature(props.feature))} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// export default connect(null, {removeFeature})(AddedFeature);
export default AddedFeature