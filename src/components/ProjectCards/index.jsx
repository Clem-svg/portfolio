/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './index.scss';

const ProjectCards = ({ project }) => {
  const {
    title,
    content,
    image,
    github,
    live,
    tags,
  } = project;

  const findTags = (usedLanguages) => {
    const languages = [];
    usedLanguages.forEach((tag) => {
      switch (tag) {
        case 'html':
          languages.push(<img src="/images/html.png" height="45px" alt="icon-html" />);
          break;
        case 'css':
          languages.push(<img src="/images/css.png" height="45px" alt="icon-css" />);
          break;
        case 'ruby':
          languages.push(<img src="/images/ruby.png" height="45px" alt="icon-ruby" />);
          break;
        case 'rails':
          languages.push(<img src="/images/rails.png" height="45px" alt="icon-rails" />);
          break;
        case 'js':
          languages.push(<img src="/images/js.png" height="45px" alt="icon-js" />);
          break;
        case 'scss':
          languages.push(<img src="/images/sass.png" height="45px" alt="icon-sass" />);
          break;
        case 'wordpress':
          languages.push(<img src="/images/wordpress.png" height="45px" alt="icon-wordpress" />);
          break;
        case 'react':
          languages.push(<img src="/images/react.png" height="45px" alt="icon-wordpress" />);
          break;
        default:
          break;
      }
    });
    return languages;
  };

  return (
    <Card border="success" style={{ width: '40rem' }} className="ProjectCard">
      <Card.Img variant="top" src={image} />
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
          && <a href={github}><Button variant="primary"> Voir le code </Button></a>}
          {live
          && <a href={live}><Button variant="outline-primary"> Voir le site </Button></a>}
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
