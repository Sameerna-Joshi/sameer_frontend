import React from 'react'

function Project() {
  return (
   <>
   <div className="proj">
   <h1 id="title">PROJECTS</h1>
    <div class="card-container">
        
        <div class="card">
            <img src="/notepad.png" alt="Card 1" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">STICK NOTES</h2>
                <p class="card-description">StickNotes is an intuitive and user-friendly web application designed to help users organize their thoughts and tasks efficiently. Inspired by the simplicity of physical sticky notes, StickNotes offers a digital platform where users can create, categorize, and manage virtual notes with ease.</p>
            </div>
        </div>
        <div class="card">
            <img src="/ems.png" alt="Card 2" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">Workforce Manager</h2>
                <p class="card-description">The Employee Management System is a robust and scalable web application designed to streamline the management of employee data within an organization. This system allows users to perform essential CRUD (Create, Read, Update, Delete) operations on employee records, facilitating efficient data management and improved organizational workflow.</p>
            </div>
        </div>
        <div class="card">
            <img src="/crm.png" alt="Card 3" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">Jagoo Grahak</h2>
                <p class="card-description">Jagoo Grahak is a comprehensive web application designed to streamline the management of customer details within an enterprise. Built using Spring MVC, the application provides a robust platform for handling various aspects of customer information, from creation and modification to retrieval and deletion. </p>
            </div>
        </div>
        <div class="card">
            <img src="/prod.png" alt="Card 4" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">Inventory Hub</h2>
                <p class="card-description">The Product Management application is a modern web solution designed to facilitate the management of product information in an efficient and user-friendly manner. Leveraging Spring REST for the backend, MySQL for data storage, React for the frontend, and Axios for HTTP requests, this application provides a comprehensive platform for performing CRUD (Create, Read, Update, Delete) operations on product data..</p>
            </div>
        </div>
        <div class="card">
            <img src="/blog.jpeg" alt="Card 5" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">BlogVista</h2>
                <p class="card-description">The Blog System is a comprehensive web application designed to manage and interact with blog content effectively. Built using Spring MVC, JPA Repository, and MySQL, this application provides a user-friendly platform for creating, deleting, and reading blog posts. Users can also filter and view blogs based on specific date ranges, making it a powerful tool for both content management and audience engagement..</p>
            </div>
        </div>
        <div class="card">
            <img src="/text.png" alt="Card 6" class="card-image"/>
            <div class="card-content">
                <h2 class="card-title">TextTools</h2>
                <p class="card-description">The TextTools React App is a versatile and user-friendly application designed for various text manipulation and comparison tasks. It offers essential tools for transforming text, such as capitalizing and decapitalizing, checking text similarity, and toggling between light and dark modes for an optimized user experience. This application is built with React, ensuring a responsive and interactive interface..</p>
            </div>
        </div>
    </div>
   
    </div>
   </>

  )
}

export default Project
