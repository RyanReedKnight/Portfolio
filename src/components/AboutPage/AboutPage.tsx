import React, { FC } from 'react';
import styles from './AboutPage.module.css';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {

  return (
    <div className={styles.AboutPage} data-testid="AboutPage">
      <h2> Photo Portfilio Web App</h2>
      <p> This is a web application I use to display photos I have taken. The front end which you are viewing now was built with React and TypeScript,
        and is served out of an AWS EC2 instance via Nginx. The back-end is built with Spring Boot and is hosted 
        on an EC2 instance, with a mounted EBS drive to store the photos. The EC2 instance is connected to an AWS RDS database, 
        where records pertaining to each photo are stored. There is also an admin portal I use to upload and/or delete photos. In developing this web application, 
        I learned how to read and write image files to a drive with Java, how to mount an external drive to a server for storage, 
        how to use axios to send and receive image files from a client to a server, the basics of using the React library,
        how to serve a website out of Nginx, and how to use Nginx as a reverse proxy.
      </p>
      <p>Relevant links</p>
      <ul>
        <li><a className={styles.linkStyle} href="https://github.com/RyanReedKnight/PortfolioBackend" target="_blank">Repositiry for the backend of the application.</a></li>
        <li><a className={styles.linkStyle} href="https://github.com/RyanReedKnight/Portfolio" target="_blank">Repository for the front end of the application.</a></li>
        <li><a className={styles.linkStyle} href="https://github.com/RyanReedKnight/portfolio-admin" target="_blank">Repository for the admin portal.</a></li>
      </ul>
    </div>
)};

export default AboutPage;
