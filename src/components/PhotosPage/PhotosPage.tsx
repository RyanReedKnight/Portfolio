import React, { FC } from 'react';
import styles from './PhotosPage.module.css';

interface PhotosPageProps {}

const PhotosPage: FC<PhotosPageProps> = () => {
  
  

  return (
    <div className={styles.PhotosPage} data-testid="PhotosPage">
      PhotosPage Component
    </div>
)};

export default PhotosPage;
