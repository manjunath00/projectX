import React from "react";
import { useParams,useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { deleteProject } from "./redux/projectSlice";
import './styles/projectPage.scss';

function ViewProject() {
  const { projectId } = useParams();
  const history = useHistory();

  /* Getting All Projects */
  const ProjectList = useSelector((state) => state.projects);
 
  /* Select One Project */
  const selectedProject = ProjectList.filter(item => item.id === projectId);

  const project = selectedProject[0]
 
  const dispatch = useDispatch();

  /* Sending the item to store */
  const onDelete = () => {
    dispatch(deleteProject({ id: projectId}));
    /* Returning to home page */
    history.push('/')
  }

  return (
    <div className='project-page'>
      <div className='flex justify-content title-bar view-page'>
        <span className='heading-primary'>View Project</span>
        <div className='button-group'>
          <button className='button button__secondary'>
            <Link to={`/projects/${projectId}/edit`}>Edit Project</Link>
          </button>
          <div>
            <button onClick={() => onDelete()} className='button button__secondary--danger'>Delete Project</button>
          </div>
        </div>
      </div>

      <div className='flex project-row'>
        <div className='col-4 heading-secondary'>
          Project Heading
        </div>
          
        <div className='col-6'>
          {project.heading || ''}
        </div>
      </div>

      <div className='flex project-row'>
      <div className='col-4 heading-secondary'>
            Project description
          </div>
          <div className='col-6'>
          {project.description || ''}
        </div>
      </div>
    </div>
  );
}

export default ViewProject;

