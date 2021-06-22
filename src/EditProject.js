import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';
import { editProject } from "./redux/projectSlice";

function EditProject(props) {
  const { projectId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const ProjectList = useSelector((state) => state.projects);

  const project = ProjectList.filter(item => item.id === projectId)[0];


  const onSubmit = (values) => {
    dispatch(editProject({...values, id: projectId}));
    history.push('/')
  }

  return (
    <div className='project-page'>
     <div className='heading-primary title-bar'>Edit Project</div>
     <Form project={project} onSubmit={onSubmit} isNew={false} />
    </div>
  );
}

export default EditProject;
