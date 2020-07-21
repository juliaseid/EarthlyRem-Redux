import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/Index';
import RemedyList from './RemedyList';
import RemedyDetails from './RemedyDetails';

class Remedies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRemedy: null,
      editing: false
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  handleClick = () => {
    if (this.state.selectedRemedy != null) {
      this.setState({
        selectedRemedy: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewRemedyToList = (newRemedy) => {
    const { dispatch } = this.props;
    const action = a.addRemedy(newRemedy)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedRemedy = (id) => {
    const selectedRemedy = this.props.masterRemediesList[id];
    this.setState({ selectedRemedy: selectedRemedy });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingRemedyInList = (remedyToEdit) => {
    const { dispatch } = this.props;
    const action = a.addRemedy(remedyToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedRemedy: null
    });
  }

  handleDeletingRemedy = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteRemedy(id);
    dispatch(action);
    this.setState({ selectedRemedy: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    // const { error, isLoading } = this.props;

    // let allRemedies = remedies.map(function (obj) {
    //   return Object.values(obj)
    // })

    if (this.props.error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (this.props.isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      if (this.state.editing) {
        currentlyVisibleState = <EditRemedyForm remedy={this.state.selectedRemedy} onEditRemedy={this.handleEditingRemedyInList} />
        buttonText = "Return to Remedy List";
      } else if (this.state.selectedRemedy != null) {
        currentlyVisibleState =
          <RemedyDetails
            remedy={this.state.selectedRemedy}
            onClickingDelete={this.handleDeletingRemedy}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Remedy List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewRemedyForm onNewRemedyCreation={this.handleAddingNewRemedyToList} />
        buttonText = "Return to Remedy List"
      } else {
        currentlyVisibleState = <RemedyList remedies={this.props.masterRemediesList} onRemedySelection={this.handleChangingSelectedRemedy} />
        buttonText = "Add Remedy"
      }

    }
  }
}

RemedyControl.propTypes = {
  masterRemediesList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    remedies: state.masterRemediesList,
    isLoading: state.isLoading,
    error: state.error,
    formVisibleOnPage: state.formVisibleOnPage
  }
}



export default connect(mapStateToProps)(Remedies);