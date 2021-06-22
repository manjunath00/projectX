import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/projectlist.scss";

function ProjectList(props) {
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

ProjectList.defaultProps = {
  projects: [
    {
      id: "12",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
    {
      id: "13",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
    {
      id: "14",
      image: "https://source.unsplash.com/random/800x600",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sed facilisi facilisi nunc aenean. In enim amet arcu sit sed ut. Facilisis at accumsan turpis enim vulputate. Orci amet scelerisque est maecenas amet pulvinar sapien, neque, sit.",
    },
  ],
};
