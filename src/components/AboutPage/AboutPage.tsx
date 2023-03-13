import React, { FC } from 'react';
import styles from './AboutPage.module.css';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {

  return (
    <div className={styles.AboutPage} data-testid="AboutPage">
      AboutPage Component
    </div>
)};

export default AboutPage;
