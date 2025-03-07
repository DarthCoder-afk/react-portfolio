import { useState,useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Lanyard from '../component/Lanyard.js';
import AnimatedContent from "./AnimatedContent.js";
import HeaderImg from '../assets/img/header-img.svg';


export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'System Developer', 'Arduino Developer', '3D Artist'];
    const [text, setText] = useState('');
    const period = 200;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta (prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect (() =>{
        let ticker = setInterval (()=>{
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text, delta]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12}  md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio!</span>
                        <h1>{'I am a '}<span className='wrap'>{text}</span></h1>
                        <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.1}
                        animateOpacity
                        scale={0.1}
                        threshold={0.2}>
                        <p>Hello! My name is Sean Michael A. Borje, a passionate creator who loves diving into the world of technology. 
                            I enjoy designing and developing systems that solve real-world problems and bring innovative ideas to life. 
                        </p>
                        <button onClick={() => (console.log('connect'))}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </AnimatedContent>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Lanyard/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}