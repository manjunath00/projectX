import React from "react";
import { useState } from "react";
import './styles/form.scss';

function Form(props) {
  const { onSubmit, project = {}, isNew } = props;
  const [heading, setHeading] = useState(project.heading || '');
  const [description, setDescription] = useState(project.description || '');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formResult = {
      heading,
      description
    }

    /* OnSubmit from props */
    onSubmit(formResult);

    /* Setting the heading & description to null */
    setHeading('');
    setDescription('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='flex form-group'>
        <label className='col-4'>Project Heading</label>
        <input
          type="text"
          className='col-6'
          value={heading}
          required
          placeholder="Enter your project Heading"
          onChange={(e) => setHeading(e.target.value)}
        />
      </div>

      <div className='flex'>
        <label className='col-4'>Project Description</label>
        <textarea
          type="text"
          className='col-6'
          value={description}
          row="15"
          required
          placeholder="Enter your project Heading"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='flex form-cta'>
        <div className='col-4'></div>

<div className='col-6'>

      <input className='button button__primary' type='submit' value={isNew ? 'Add New Project' : 'Save Project'} />
</div>

    </div>
    </form>
  );
}

export default Form;

Form.defaultProps = {
  /* Prop for switching New Project & Edit Project */
  isNew: true
}
