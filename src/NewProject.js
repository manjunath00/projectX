import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Form from "./Form";
import { addNewProject } from "./redux/projectSlice";
import './styles/projectPage.scss';

function NewProject() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(addNewProject(values));
    history.push('/')
  }

  return (
    <div className='project-page'>
     <div className='heading-primary'>New Project</div>
      <div>
        <Form onSubmit={onSubmit} isNew />
      </div>
    </div>
  );
}

export default NewProject;
