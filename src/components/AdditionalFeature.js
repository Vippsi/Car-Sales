import React from 'react';
// import { connect } from "react-redux";
import { addFeature } from '../actions/carActions'
import { useDispatch } from 'react-redux'

const AdditionalFeature = props => {
  // console.log(props.feature)

  const dispatch = useDispatch()
  return (
    <li>
     
      
      
      <button onClick={() =>dispatch(addFeature(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures
//   }
// }

// export default connect(null, {addFeature})(AdditionalFeature);
export default AdditionalFeature
