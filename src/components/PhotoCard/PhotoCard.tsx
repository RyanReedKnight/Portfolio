import React, { FC } from 'react';
import styles from './PhotoCard.module.css';

interface PhotoCardProps {}

const PhotoCard: FC<PhotoCardProps> = () => (
  <div className={styles.PhotoCard} data-testid="PhotoCard">
    PhotoCard Component
  </div>
);

export default PhotoCard;
