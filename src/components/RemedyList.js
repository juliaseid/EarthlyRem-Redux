import React from 'react';
import Remedy from './Remedy';
// import { makeApiCall } from './RemediesControl';
import PropTypes from 'prop-types';


function RemedyList(props) {

  const { remedies } = props;
  // dispatch(makeApiCall());
  let allRemedies = remedies.map(function (obj) {
    return Object.values(obj)
  })
  return (
    <React.Fragment>
      {allRemedies.map((remedy) => {
        return (
          <Remedy
            whenRemedyClicked={props.onRemedySelection}
            name={remedy[1]}
            details={remedy[2]}
            ailment={remedy[3]}
            category={remedy[4]}
            ingredients={remedy[5]}
            id={remedy[0]}
            key={remedy[0]}
          />)
      })}
    </React.Fragment>
  )
}

RemedyList.propTypes = {
  onRemedySelection: PropTypes.func
}
export default RemedyList;
