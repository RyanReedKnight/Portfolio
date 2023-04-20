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
    {photoBytes && <img id="card-img" src={URL.createObjectURL(new Blob([photoBytes], { type: 'image/jpeg' }))}/>}
    <p>Description: {photoModel.description}<br/>
       Location: {photoModel.location}</p>
  </div>
  </>)
};

export default PhotoCard;
