import React from 'react';
import { connect } from "react-redux";
import { addFeature } from '../actions/carActions'

const AdditionalFeature = props => {
  // console.log(props.feature)
  return (
    <li>
     
      
      
      <button onClick={() => props.addFeature(props.feature) } className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures
//   }
// }

export default connect(null, {addFeature})(AdditionalFeature);
