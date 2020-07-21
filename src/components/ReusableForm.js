import React from "react";
import { Button, Form } from 'react-bootstrap';
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";

const ReusableFormStyle = {
  marginTop: "2%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

function ReusableForm(props) {
  const categories = ["GI", "respiratory", "skin", "eyes", "hair", "musculoskeletal", "endocrine", "chakra", "pineal", "lymphatic", "cardiovascular", "digestive", "nervous", "reproductive"]
  return (
    <div style={ReusableFormStyle}>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='name'
            placeholder='Remedy Name' />
        </Form.Group>
        <Form.Group>
          <Dropdown
            name='category'
            options={categories}
            onChange={this._onSelect}
            value="Select Category:" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='ailment'
            placeholder='Ailment' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='ingredients'
            placeholder='Ingredients' />
        </Form.Group>
        <Form.Group>
          <textarea
            name='description'
            placeholder='Remedy description/details:' />
        </Form.Group>
        <br /><br />
        <Button className='reusBtn' type='submit'>{props.buttonText}</Button>
      </Form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;