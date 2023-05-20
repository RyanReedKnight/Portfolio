import React, { FC } from 'react';
import styles from './PhotoCard.module.css';

// Models
import Photo from '../../models/Photo';
import ImageService from '../../services/ImageService';

interface PhotoCardProps {
  photoModel:Photo,
  photoBytes:ArrayBuffer,
  setExpandedPhotoBytes:Function,
}

const PhotoCard: FC<PhotoCardProps> = ({photoModel,photoBytes,setExpandedPhotoBytes}) => {
  /*const [photoBytes,setPhotoBytes] = React.useState<ArrayBuffer>();
  
  React.useEffect(() => {
    (new ImageService).getPhotoBytes(photoModel.title)
    .then((res)=>{
      setPhotoBytes(()=>res as ArrayBuffer)
    })
    .catch(err => console.error(err))
  },[])*/

  // Handle component click, ultimatly should expend component.
  const handleComponentClick = () => {
    setExpandedPhotoBytes(()=>photoBytes);
  }

  return (<> 
    <div className={styles.PhotoCard} data-testid="PhotoCard" onClick={handleComponentClick}>
      {photoBytes && <img id="card-img" src={URL.createObjectURL(new Blob([photoBytes], { type: 'image/jpeg' }))}/>}
      <p>Description: {photoModel.description}<br/>
        Location: {photoModel.location}</p>
    </div> 
  </>)
};

export default PhotoCard;
