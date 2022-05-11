import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt';

import { Container, Link } from './styles';
import { Cta } from '../../styles/cta';

import { projectData, projectSectionTitle, colors } from '../../source/data';

const Project: React.FC = () => {
  return (
    <Container>
      <Fade left duration={1000} delay={300} distance="30px">
        <h1>{projectSectionTitle}</h1>
      </Fade>
      {projectData.map((project, i) => (
        <>
          <section className="row">
            <div className="project-text">
              <Fade left duration={1000} delay={700} distance="30px">
                <h2>{project.title}</h2>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <p>{project.description3 ?? ''}</p>

                <div>
                  <Cta
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.sourceUrl}
                    download
                  >
                    {project.liveButtonText}
                  </Cta>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.sourceUrl}
                  >
                    {project.sourceText}
                  </Link>
                </div>
              </Fade>
            </div>
            <Fade right duration={1000} delay={1100} distance="30px">
              {project.img.src && (
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <img
                    src={project.img.src}
                    alt="project"
                    style={{ maxWidth: '40vw' }}
                  />
                </Tilt>
              )}
            </Fade>
          </section>
          {i < projectData.length - 1 && (
            <div
              style={{
                width: '97.5%',
                height: '2.5px',
                background: colors.third,
                opacity: 0.2,
                margin: 'auto',
                marginTop: '3rem',
                marginLeft: '1rem',
              }}
            />
          )}
        </>
      ))}
    </Container>
  );
};

export default Project;
