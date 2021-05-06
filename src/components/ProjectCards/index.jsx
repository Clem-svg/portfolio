/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import html from '../../images/html.png';
import css from '../../images/css.png';
import ruby from '../../images/ruby.png';
import rails from '../../images/rails.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import wordpress from '../../images/wordpress.png';
import scss from '../../images/sass.png';
import './index.scss';

const ProjectCards = ({ project }) => {
  const {
    title,
    content,
    github,
    live,
    tags,
  } = project;

  const findTags = (usedLanguages) => {
    const languages = [];
    usedLanguages.forEach((tag) => {
      switch (tag) {
        case 'html':
          languages.push(<img src={html} height="45px" alt="icon-html" />);
          break;
        case 'css':
          languages.push(<img src={css} height="45px" alt="icon-css" />);
          break;
        case 'ruby':
          languages.push(<img src={ruby} height="45px" alt="icon-ruby" />);
          break;
        case 'rails':
          languages.push(<img src={rails} height="45px" alt="icon-rails" />);
          break;
        case 'js':
          languages.push(<img src={js} height="45px" alt="icon-js" />);
          break;
        case 'scss':
          languages.push(<img src={scss} height="45px" alt="icon-sass" />);
          break;
        case 'wordpress':
          languages.push(<img src={wordpress} height="45px" alt="icon-wordpress" />);
          break;
        case 'react':
          languages.push(<img src={react} height="45px" alt="icon-wordpress" />);
          break;
        default:
          break;
      }
    });
    return languages;
  };

  return (
    <Card border="success" className="ProjectCard">
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <ul className="Code_languages">
          {findTags(tags).map((element) => (
            <li>
              {element}
            </li>
          ))}
        </ul>
        <div className="ProjectCard__buttons_block">
          {github
          && <a href={github} target="_blank" rel="noreferrer"><Button variant="primary"> Voir le code </Button></a>}
          {live
          && <a href={live} target="_blank" rel="noreferrer"><Button variant="outline-primary"> Voir le site </Button></a>}
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
