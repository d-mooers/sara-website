import React from 'react';
import Fade from 'react-reveal/Fade';

import { aboutData } from '../../source/data';
import { Container } from './styles';

const Text = ({ text }) => {
  if (text) return <p style={{ width: '100%' }}>{text}</p>;
  return <></>;
};

const About: React.FC = () => {
  const { sectionTitle, img, p1, p2, p3, p4, p5 } = aboutData;

  return (
    <Container id="about">
      <section>
        <Fade duration={1000} delay={700} distance="30px">
          <div className="left">
            <img src={img.src} alt="profile" />
          </div>
        </Fade>
        <div style={{ width: '60%' }}>
          <Fade duration={1000} delay={300} distance="30px">
            <h1>{sectionTitle}</h1>
          </Fade>

          <Fade
            duration={1000}
            delay={1100}
            distance="30px"
            style={{ maxWidth: '100%', width: '100%' }}
          >
            <Text text={p1} />
            <Text text={p2} />
            <Text text={p3} />
            <Text text={p4} />
            <Text text={p5} />
          </Fade>
        </div>
      </section>
    </Container>
  );
};

export default About;
