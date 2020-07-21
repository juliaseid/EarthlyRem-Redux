import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";

function ReusableForm(props) {
  const categories = ["GI", "respiratory", "skin", "eyes", "hair", "musculoskeletal", "endocrine", "chakra", "pineal", "lymphatic", "cardiovascular", "digestive", "nervous", "reproductive"]
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Remedy Name' />
        <Dropdown
          name='category'
          options={categories}
          onChange={this._onSelect}
          value="Select Category:" />
        <input
          type='text'
          name='ailment'
          placeholder='Ailment' />
        <input
          type='text'
          name='ingredients'
          placeholder='Ingredients' />
        <textarea
          name='description'
          placeholder='Remedy description/details:' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;