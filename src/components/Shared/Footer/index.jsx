import React from 'react';
import github from '../../../images/github.svg';
import linkedin from '../../../images/linkedin.svg';
import './index.scss';

const Footer = () => (
  <footer className="Footer">
    <div>
      <a href="https://github.com/Clem-svg">
        <img src={github} alt="github clem-svg" />
      </a>
      <a href="https://www.linkedin.com/in/clementine-fouque/">
        <img src={linkedin} alt="linkedin clementine fouque" />
      </a>
    </div>
    <p>Copyright © Clémentine Fouqué 2021 | Made with ✨</p>
  </footer>
);

export default Footer;
