import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditRemedyForm(props) {
  const { remedy } = props;

  function handleEditRemedyFormSubmission(event) {
    event.preventDefault();
    props.onEditRemedy(
      {
        name: event.target.name.value,
        category: event.target.category.value,
        ailment: event.target.ailment.value,
        description: event.target.description.value,
        ingredients: event.target.ingredients.value,
        id: remedy.id
      });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditRemedyFormSubmission}
        buttonText="Update Remedy" />
    </React.Fragment>
  );
}

EditRemedyForm.propTypes = {
  onEditRemedy: PropTypes.func
};

export default EditRemedyForm;