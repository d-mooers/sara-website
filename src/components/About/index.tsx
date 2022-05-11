import React from 'react';
import Fade from 'react-reveal/Fade';

import { aboutData } from '../../source/data';
import { Container } from './styles';

const Text = ({ text = '' }: { text?: string }): React.ReactElement => {
  if (text) return <p>{text}</p>;
  return <></>;
};

const About: React.FC = () => {
  const { sectionTitle, img, p1, p2, p3, p5, p6, p7 } = aboutData;

  return (
    <Container id="about">
      <Fade duration={1000} delay={300} distance="30px">
        <h1>{sectionTitle}</h1>
      </Fade>

      <section>
        <Fade duration={1000} delay={700} distance="30px">
          <div className="left">
            <img src={img.src} alt="profile" />
          </div>
        </Fade>
        <Fade duration={1000} delay={1100} distance="30px">
          <div className="right">
            {/* {paragraphs.map((text) => (
              <p>{text}</p>
            ))} */}
            <Text text={p1} />
            <Text text={p2} />
            <Text text={p3} />
          </div>
        </Fade>
      </section>
      <div style={{ width: '100%', height: 2, background: 'white' }} />
      <Fade duration={1000} delay={300} distance="30px">
        <h1>Experience</h1>
      </Fade>

      <section>
        <Fade duration={1000} delay={1100} distance="30px">
          <div className="right">
            {/* {paragraphs.map((text) => (
              <p>{text}</p>
            ))} */}
            <Text text={p5} />
            <Text text={p6} />
            <Text text={p7} />
          </div>
        </Fade>
      </section>
    </Container>
  );
};

export default About;
