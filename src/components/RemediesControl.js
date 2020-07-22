import React, { useState, useEffect } from 'react';
import NewRemedyForm from "./NewRemedyForm";
import EditRemedyForm from './EditRemedyForm';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/Index';
import RemedyList from './RemedyList';
import RemedyDetails from './RemedyDetails';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';


const splashStyles = {
  marginTop: '20%',
}

export default function Remedies(props) {

  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall())
  // };
  //This needs to be refactored with useEffect() - componentDidMount does not work in functional components

  useEffect(() => {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }, [])

  handleClick = () => {
    if (selectedRemedy != null) {
      // this.setState({
      //   selectedRemedy: null,
      //   editing: false
      // });
      setEditing(false);
      setSelectedRemedy(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
      // const { dispatch } = this.props;
      // const action = a.toggleForm();
      // dispatch(action);
    }
  };

  //this needs to be updated to include api call & method
  handleAddingNewRemedyToList = (newRemedy) => {
    const { dispatch } = this.props;
    const action = a.addRemedy(newRemedy);
    dispatch(action);
    setFormVisibleOnPage(!formVisibleOnPage);
    // const action2 = a.toggleForm();
    // dispatch(action2);
  }

  handleChangingSelectedRemedy = (id) => {
    const preSelectedRemedy = this.props.masterRemediesList[id];
    // this.setState({ selectedRemedy: selectedRemedy });
    setSelectedRemedy(preSelectedRemedy);
  }

  handleEditClick = () => {
    //this.setState({ editing: true });
    setEditing(true);
  }
  //this method needs to be updated to include api call & method
  handleEditingRemedyInList = (remedyToEdit) => {
    const { dispatch } = this.props;
    const action = a.addRemedy(remedyToEdit);
    dispatch(action);
    setEditing(false);
    setSelectedRemedy(null);
    // this.setState({
    //   editing: false,
    //   selectedRemedy: null
    // });
  }

  //this method needs to be updated to include api call & method
  handleDeletingRemedy = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteRemedy(id);
    dispatch(action);
    //this.setState({ selectedRemedy: null });
    setSelectedRemedy(null);
  }
  //what is wrong here? Something is making it not work and it probably has to do with turning it into a functional component b/c that's when it broke
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();

    if (isLoaded(auth) && auth.currentUser == null) {
      console.log(auth.currentUser, 'user returning null');
      return (
        <div style={splashStyles}>
          <img src="https://i.ibb.co/SXP3wGw/earthly-remedies.png"></img>
          <h3>
            Welcome to Earthly Remedies.
            <br />
          </h3>
          <h6>
            Please <a href="/signIn">sign in</a>
          </h6>
        </div>
      );
    } else if (isLoaded(auth) && auth.currentUser != null) {
      if (this.props.error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (this.props.isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        if (editing) {
          currentlyVisibleState = <EditRemedyForm remedy={selectedRemedy} onEditRemedy={this.handleEditingRemedyInList} />
          buttonText = "Return to Remedy List";
        } else if (selectedRemedy != null) {
          currentlyVisibleState =
            <RemedyDetails
              remedy={selectedRemedy}
              onClickingDelete={this.handleDeletingRemedy}
              onClickingEdit={this.handleEditClick} />
          buttonText = "Return to Remedy List";
        } else if (formVisibleOnPage) {
          currentlyVisibleState = <NewRemedyForm onNewRemedyCreation={this.handleAddingNewRemedyToList} />
          buttonText = "Return to Remedy List";
        } else {
          currentlyVisibleState = <RemedyList remedies={this.props.masterRemediesList} onRemedySelection={this.handleChangingSelectedRemedy} />
          buttonText = "Add Remedy";
        }
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button className="contlBtn" onClick={this.handleClick}>
            {buttonText}
          </button>
        </React.Fragment>
      );
    };
  }
};



RemedyControl.propTypes = {
  masterRemediesList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    remedies: state.masterRemediesList,
    isLoading: state.isLoading,
    error: state.error,
    //formVisibleOnPage: state.formVisibleOnPage
  };
};



export default connect(mapStateToProps)(Remedies);