import React, { FC } from 'react';
import styles from './PhotoCard.module.css';

// Models
import Photo from '../../models/Photo';

interface PhotoCardProps {
  photoModel:Photo
}

const PhotoCard: FC<PhotoCardProps> = ({photoModel}) => (
  <div className={styles.PhotoCard} data-testid="PhotoCard">
    PhotoCard Component
  </div>
);

export default PhotoCard;
