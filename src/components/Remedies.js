import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/Index';

class Remedies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }


  render() {
    const { error, isLoading, remedies } = this.props;
    //let myKeys = Object.keys(remedies); // [1,2,3]
    //let myValues = Object.values(remedies); // ['red','blude]
    let allRemedies = Object.entries(remedies); // [[1, 'red'], [2,'blude']]

    //remedies is an array of objects - is allRemedies doing what we want? I think not b/c it is treating remedies as an object
    //however, the good news is that i think we can just remedies.map directly instead of what we're doing

    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Remedies</h1>
          {console.log("i am in rendering")}
          <ul>

            {allRemedies.map((remedy) => <li key={remedy.remedyId}>
              Name: {remedy[1]}
              Details: {remedy[2]}
              Ailment: {remedy[3]}
              Category: {remedy[4]}
              Ingredients: {remedy[5]}
            </li>)}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    remedies: state.remedies,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Remedies);