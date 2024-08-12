import React from 'react'
 
function Skills() {
  return (
    <>
    <div className="skillset">
    <h2 id="skill">SKILLS</h2>
     <div class="card-container">
        <div class="card">
            <img src="data:image/jpeg;base64,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" alt="Card 1" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">JAVA</h2>
                <p class="card-description"> proficient in JAVA with Extensive Experience in developing application, Expertise in OOPS, MultiThreading,Collections and Exception Handling .</p>
            </div>  
        </div>
        <div class="card">
            <img src="/jdbc.png" alt="Card 2" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">JDBC</h2>
                <p class="card-description">Extensive experience in using JDBC for connecting Java applications with various relational databases.
                </p>
            </div>
        </div>
        <div class="card">
            <img src="/hibernate.png" alt="Card 3" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">HIBERNATE</h2>
                <p class="card-description">Extensive experience with Hibernate ORM (Object-Relational Mapping) for Java applications, enabling efficient and scalable data management..</p>
            </div>
        </div>
        <div class="card">
            <img src="spring.png" alt="Card 4" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">Spring</h2>
                <p class="card-description"> Extensive experience with the Spring Framework for building enterprise-level Java applications. Well-versed in various Spring modules and their practical applications.</p>
            </div>
        </div>
        <div class="card">
            <img src="react.png" alt="Card 5" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">REACT-JS</h2>
                <p class="card-description"> Beginner-level experience with React.js, focusing on building interactive and dynamic user interfaces.</p>
            </div>
        </div>
        <div class="card">
            <img src="spring-rest.png" alt="Card 6" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">SPRING REST</h2>
                <p class="card-description">Strong understanding of Spring REST for building robust and scalable RESTful web services. Experienced in designing and implementing APIs using Spring Framework.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skills
