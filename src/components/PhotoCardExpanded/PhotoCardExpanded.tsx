import React, { FC } from 'react';
import styles from './PhotoCardExpanded.module.css';

// Models
import Photo from '../../models/Photo';
import ImageService from '../../services/ImageService';

interface PhotoCardExpandedProps {
  expandedPhotoBytes:ArrayBuffer,
  setExpandedPhotoBytes:Function,
}

const PhotoCardExpanded: FC<PhotoCardExpandedProps> = ({expandedPhotoBytes,setExpandedPhotoBytes}) => {
  
    const handleClose = () => {
        setExpandedPhotoBytes(()=>new ArrayBuffer(0))
    }

    return (<div className={styles.PhotoCardExpanded}> 
        <button className={styles.closeButton} onClick={handleClose}>X</button>
        <img id="card-img" src={URL.createObjectURL(new Blob([expandedPhotoBytes], { type: 'image/jpeg' }))}/>
    </div>)
};

export default PhotoCardExpanded;