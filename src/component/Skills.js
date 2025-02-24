import Carousel from 'react-multi-carousel';
import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import colorsharp from '../assets/img/bg.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedContent from '../component/AnimatedContent.js';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const skills = [
        {title: 'Web Development', percentage: 90},
        {title: 'System Development', percentage: 70},
        {title: 'Arduino Development', percentage: 80},
        {title: '3D Design', percentage: 80},
      ]

      
      const [percentages, setPercentages] = useState(skills.map(() => 0));

        useEffect(() => {
            const interval = setInterval(() => {
            setPercentages((prevPercentages) =>
                prevPercentages.map((percentage, index) =>
                percentage < skills[index].percentage ? percentage + 1 : percentage
                )
            );
            }, 50);

            return () => clearInterval(interval);
        }, [skills]);

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.3}
                        animateOpacity
                        scale={0.1}
                        threshold={0.2}>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>I am a versatile IT student skilled in front-end development, 3D design, 
                                    Arduino projects, and system development. I have experience in web applications, 
                                    Excel systems, manual testing, GitHub, animation, and hardware integration. 
                                    Eager to learn, I strive to create efficient and innovative solutions.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    {skills.map((skill, index) => (
                                        <div className='item' key={index}>
                                            <div className='progressbar-wrapper'>
                                                <CircularProgressbar 
                                                value={percentages[index]}
                                                text={`${percentages[index]}%`}
                                                styles={buildStyles({
                                                    textColor: '#fff',
                                                    pathColor: `rgba(93, 186, 198, 1`,
                                                    trailColor: '#d6d6d6',
                                                })}
                                                />
                                            </div>
                                            <h5>{skill.title}</h5>
                                        </div>
                                    ))}                                
                                
                                </Carousel>
                            </div>
                        </AnimatedContent>
                        
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorsharp} alt='ColorSharp'/>
        </section>
      )
}