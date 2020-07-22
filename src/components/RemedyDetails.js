import React from 'react';
import PropTypes from 'prop-types';

function RemedyDetails(props) {
  const { remedy, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Remedy Details</h1>
      <h4>Name: {remedy.name}</h4>
      <h4>Ailment: {remedy.ailment}</h4>
      <h4>Category: {remedy.category}</h4>
      <h4>Ingredients: {remedy.ingredients}</h4>
      <p><b>Instructions: </b> {remedy.details}</p>
      <br />
      <button onClick={props.onClickingEdit}>Update</button>
      <button onClick={() => onClickingDelete(props.id)}>Delete</button>
    </React.Fragment>
  );
}

RemedyDetails.propTypes = {
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default RemedyDetails;