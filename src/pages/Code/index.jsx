import React from 'react';
import data from '../../Data/projectsData';
import ProjectCard from '../../components/ProjectCards';
import './index.scss';

const Code = () => (
  <div className="Code page_container">
    <p>
      Retrouvez l&apos;intégralité de mes projets sur
      {' '}
      <a href="https://github.com/Clem-svg" className="writtenCode">Github</a>
    </p>
    <ul className="Code__container">
      {data.map((project) => (
        <li>
          <ProjectCard
            project={project}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Code;
