import React from 'react'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

function Section() {
  return (
    <div>
        <section id="home">
        <div className="portfolio-content">
                <div className="portfolio-description">
                    <h2>Hello, I'm Sameerna Joshi</h2>
                    <p>
                        I am a passionate Full Stack Java Developer with extensive experience
                        in building scalable and efficient web applications. My expertise includes
                        Java, Spring Boot, React, and various other technologies. I also enjoy
                        mentoring and sharing my knowledge with others. Feel free to explore
                        my work and get in touch!
                    </p>
                </div>
                <img
                    src="/myphoto_sj.jpg"
                    alt="Your Name"
                    className="portfolio-image"
                />
            </div>
            </section>

            <section id="about">
                <Project/>
                
            </section>

            <section id="portfolio">
                <Skills/>
            </section>
            <section id="contact">
                <Contact/>
            </section>


    </div>
  )
}

export default Section
