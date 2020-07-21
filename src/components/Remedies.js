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

    let allRemedies = remedies.map(function (obj) {
      return Object.values(obj)
    })

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
              <ul>
                <li>Name: {remedy[1]}</li>
                <li>Details: {remedy[2]}</li>
                <li>Ailment: {remedy[3]}</li>
                <li>Category: {remedy[4]}</li>
                <li>Ingredients: {remedy[5]}</li>
                <br></br>
              </ul>
            </li>)}
          </ul>
        </React.Fragment >
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