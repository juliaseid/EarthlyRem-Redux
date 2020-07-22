import React from 'react';
import PropTypes from 'prop-types';

function Remedy(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenRemedyClicked(props.id)}>
        <h3>{props.name} - {props.category}</h3>
      </div>
    </React.Fragment>
  );
}

Remedy.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  whenRemedyClicked: PropTypes.func
};

export default Remedy;