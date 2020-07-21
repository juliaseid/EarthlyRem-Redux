import React from 'react';
import Remedy from './Remedy';
import { makeApiCall } from './../actions/Index';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function RemedyList(props) {


  if (componentDidMount()) {
    const { remedies, dispatch } = this.props;
    dispatch(makeApiCall());
    let allRemedies = remedies.map(function (obj) {
      return Object.values(obj)
    })
    return (
      <React.Fragment>
        {allRemedies.map((remedy) => {
          <Remedy
            whenRemedyClicked={props.onRemedySelection}
            remedyName={remedy[1]}
            description={remedy[2]}
            ailment={remedy[3]}
            category={remedy[4]}
            ingredients={remedy[5]}
            id={remedy[0]}
            key={remedy[0]}
          />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h4>Loading...</h4>
      </React.Fragment>
    );
  }
}

RemedyList.propTypes = {
  onRemedySelection: PropTypes.func
}

export default RemedyList;