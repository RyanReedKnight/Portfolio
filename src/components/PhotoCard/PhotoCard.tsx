import React, { FC } from 'react';
import styles from './PhotoCard.module.css';

// Models
import Photo from '../../models/Photo';
import ImageService from '../../services/ImageService';

interface PhotoCardProps {
  photoModel:Photo
}

const PhotoCard: FC<PhotoCardProps> = ({photoModel}) => {
  const [photoBytes,setPhotoBytes] = React.useState<ArrayBuffer>();
  
  React.useEffect(() => {
    (new ImageService).getPhotoBytes(photoModel.title)
    .then((res)=>{
      setPhotoBytes(()=>res as ArrayBuffer)
    })
    .catch(err => console.error(err))
  },[])

  return (<>
  <div className={styles.PhotoCard} data-testid="PhotoCard">
    {photoBytes && <img src={URL.createObjectURL(new Blob([photoBytes], { type: 'image/jpeg' }))}/>}
    <h2>Description: {photoModel.description}</h2>
    <h2>Location: {photoModel.location}</h2>
  </div>
  </>)
};

export default PhotoCard;
