import React, { useCallback } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Container } from './styles';
import { FooterData } from '../../source/data';

const Footer: React.FC = () => {
  // Needed for the native window.scroll smooth behavior to work on all browsers
  smoothscroll.polyfill();

  const scrollTo = useCallback((element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop,
    });
  }, []);

  return (
    <Container id="Footer">
      <br />
      <a
        href="#!"
        aria-label="Go Up"
        onClick={() => scrollTo(document.getElementById('main'))}
      >
        <FontAwesomeIcon id="up" icon={faChevronUp} size="1x" />
      </a>
      <div>
        <a
          href={FooterData.mailTo}
          aria-label="GitHub Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href={FooterData.linkedinUrl}
          aria-label="LinkedIn Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>
      <hr />

      {/* If you enjoyed this template, please leave my credits here! :) */}
    </Container>
  );
};

export default Footer;
