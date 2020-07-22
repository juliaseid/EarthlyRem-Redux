import React, { useState, useEffect, useSelector } from 'react';
import NewRemedyForm from "./NewRemedyForm";
import EditRemedyForm from './EditRemedyForm';
import { connect } from 'react-redux';
import { addRemedy } from '../actions/Index';
import RemedyList from './RemedyList';
import RemedyDetails from './RemedyDetails';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from './../firebase';



const splashStyles = {
  marginTop: '20%',
  textAlign: 'center'
}

export default function Remedies(props) {

  const [selectedRemedy, setSelectedRemedy] = useState({});
  const [editing, setEditing] = useState(false);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [remedies, setRemedies] = useState([]);
  const [postId, setPostId] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const isLoading = useSelector(state => state.isLoading);


  useEffect(() => {
    // setIsLoading(true);
    return fetch(`http://localhost:5000/api/remedies`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          // setIsLoading(false);
          setRemedies(jsonifiedResponse.remedies);
          console.log(jsonifiedResponse.remedies);
        })
      .catch((error) => {
        setError(error);
      });
  }, [RemedyList])

  const handleClick = () => {
    if (selectedRemedy != null) {
      setEditing(false);
      setSelectedRemedy(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddingNewRemedyToList = (newRemedy) => {

    let temp = {
      ...remedies,
      [newRemedy.id]: {
        name: newRemedy.name,
        details: newRemedy.details,
        ailment: newRemedy.ailment,
        category: newRemedy.category,
        ingredients: newRemedy.ingredients,
        id: newRemedy.id
      }
    }
    setRemedies(temp);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRemedy)
    };
    fetch('http://localhost:5000/api/remedies', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));

    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleChangingSelectedRemedy = (id) => {
    const preSelectedRemedy = remedies[id];
    setSelectedRemedy(preSelectedRemedy);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingRemedyInList = (remedyToEdit) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(remedyToEdit)
    };
    fetch('http://localhost:5000/api/remedies', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));

    setEditing(false);
    setSelectedRemedy(null);

  }

  //this method needs to be updated to include api call & method
  const handleDeletingRemedy = (id) => {
    let temp = { ...remedies };
    delete temp.id;
    setRemedies(temp);
    setSelectedRemedy(null);
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  const auth = firebase.auth();

  if (!isLoaded(auth)) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else if (isLoaded(auth) && auth.currentUser == null) {
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
    if (editing) {
      currentlyVisibleState = <EditRemedyForm remedy={selectedRemedy} onEditRemedy={handleEditingRemedyInList} />
      buttonText = "To List";
    } else if (selectedRemedy != null) {
      currentlyVisibleState =
        <RemedyDetails
          remedy={selectedRemedy}
          onClickingDelete={handleDeletingRemedy}
          onClickingEdit={handleEditClick} />
      buttonText = "To List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewRemedyForm onNewRemedyCreation={handleAddingNewRemedyToList} />
      buttonText = "To List";
    } else {
      currentlyVisibleState = <RemedyList remedies={remedies} onRemedySelection={handleChangingSelectedRemedy} />
      buttonText = "Add Remedy";
    }
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button className="contlBtn" onClick={handleClick}>
        {buttonText}
      </button>
    </React.Fragment>
  );
}
