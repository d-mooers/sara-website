import React from 'react';
import Fade from 'react-reveal/Fade';

import { aboutData } from '../../source/data';
import { Container } from './styles';

const Text = ({ text }) => {
  if (text) return <p>{text}</p>;
  return <></>;
};

const About: React.FC = () => {
  const { p5, p6, p7 } = aboutData;

  return (
    <Container id="about">
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
