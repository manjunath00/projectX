import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import "./styles/projectlist.scss";

function ProjectList() {
  const projects = useSelector((state) => state.projects)
  return (
    <div className="project-list">
      {projects.map((item) => {
        return (
          <Link to={`/projects/${item.id}`} key={item.id}>
            <div key={item.id} className="project">
              <div>
                <img src={item.image} alt={item.heading} />
              </div>
              <div className="project-text">
                <div className="project-heading">{item.heading}</div>
                <div className="project-desc">{item.description}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectList;
