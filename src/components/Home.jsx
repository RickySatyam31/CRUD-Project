import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Homepage from "../Assets/Homepage.png"

const Home = () => {
    return (
        <Box>
            <Typography style = {{ textAlign: "center" }} variant = "h2" > Welcome! </Typography> 
            <Typography style = {{ textAlign: "center" }} variant = "h5" > CRUD app with Json - server using Axios </Typography> 
            <img src = { Homepage } style = {{ width: "30%", margin: "5px 0 0 35%" }} /> 
            <Typography style = {{ textAlign: "center" }} variant = "h5" > Home Page </Typography> 
            <Typography style = {{ textAlign: "center" }} variant = "h6">At Ontario, Canada's Conestoga College Institute of Technology, Ricky Satyam is now working towards a post-graduate degree in mobile solution development. He graduated from UKA Tarsadia University in Gujarat, India, with a Bachelor of Science in Computer Engineering.

Ricky is a committed person with exceptional academic, communication, interpersonal, organisational, and people abilities who has one year of experience in web design and development. He is enthusiastic about working in the IT industry and open to moving to pursue new chances.
Programming languages like React JS, Java Script, Next JS, and HTML, design frameworks like CSS (3), Bootstrap, Material UI, and Shopify Polaris, and understanding of databases like Mongo DB (Atlas, Compass) and MySQL are just a few of Ricky's talents and competences. Additionally, he is familiar with PHP, C#, Figma, Figjam, Node JS, and Express JS.

As a Full-Time Web Developer at AppMixo in Gujarat, India, Ricky worked with clients to assess the functionality and design needs of websites, created and maintained websites for a variety of companies, and assisted high-level users with technical issues. He also worked as a Web Developer Intern at Kartum Infotech, where he picked up skills in HTML, CSS, BOOTSTRAP, and PHP (LARAVEL) website development and design.</Typography>
        </Box>
    );
};

export default Home;
