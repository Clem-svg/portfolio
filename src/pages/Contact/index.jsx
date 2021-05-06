import React from 'react';
import './index.scss';

const Contact = () => (
  <div className="Contact page_container">
    <div className="Contact__container">
      <div>
        <img alt="Clémentine Fouqué" className="static" src="orangePicture.png" height="250px" />
        <img alt="Clémentine Fouqué" className="active" src="/images/orange.gif" height="250px" />
      </div>
      <div className="Contact__details">
        <p id="name">Clémentine Fouqué</p>
        <p>📍Paris</p>
        <p>
          Tel :
          {' '}
          <a href="tel:+33667442692">+33 6 67 44 26 92</a>
        </p>
        <p>
          Mail :
          {' '}
          <a href="mailto:clementine.fouque@gmail.com">clementine.fouque@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
