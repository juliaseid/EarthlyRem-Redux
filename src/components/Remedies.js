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
    console.log("i am in calling");
  }

  render() {
    const { error, isLoading, remedies } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Remedies</h1>
          <ul>
            {remedies.map((remedy, index) =>
              <li key={index}>
                <h3>{remedy.name}</h3>
                <p>{remedy.abstract}</p>
              </li>
            )}
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