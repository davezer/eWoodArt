import React from 'react';
import { Container } from 'react-bootstrap';
// import Typed from 'react-typed';
import profileImage from '../../assets/iamges/lizwood.jpg';

function About() {
    return(
        <>
        <section id="about" className="about">
            <Container className='row upper-container'> 
                <div className="image-container">
                    <img className="col-lg-6 col-md-12 m-auto profile-pic" src={profileImage} alt="Liz Wood" />
                    <h1 className="intro-title">Hi, I'm</h1>
                    <h1 className="intro-name">Liz Wood!</h1>
                </div>
                <div className='text-slider-div'>
                    {/* <span className="intro-text-slider">
                        <Typed
                        strings={[
                            "Full Stack Web Developer",
                            
                        ]}
                        typeSpeed={50}
                
                        />
                    </span> */}
                </div>
            </Container>
            <div className="inner container">
                <div className="row">
                    <div className="about-description col-lg-6 col-md-12">
                        <p>
                            Some words here about Liz
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}



export default About;