import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewRemedyForm(props) {

  function handleNewRemedyFormSubmission(event) {
    event.preventDefault();
    props.onNewRemedyCreation({
      name: event.target.name.value,
      category: event.target.category.value,
      ailment: event.target.ailment.value,
      details: event.target.details.value,
      ingredients: event.target.ingredients.value,
      // id: remedy.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewRemedyFormSubmission}
        buttonText="Add New Remedy!" />
    </React.Fragment>
  );
}

NewRemedyForm.propTypes = {
  onNewRemedyCreation: PropTypes.func
};

export default NewRemedyForm;