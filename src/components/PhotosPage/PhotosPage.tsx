import React, { FC } from 'react';
import styles from './PhotosPage.module.css';
import ImageService from '../../services/ImageService';
import Photo from '../../models/Photo';
import PhotoCard from '../PhotoCard/PhotoCard';

interface PhotosPageProps {}

const PhotosPage: FC<PhotosPageProps> = () => {
  
  
  const [photoRecords, setPhotoRecords] = React.useState<Photo[]>([]);

  React.useEffect(() => {

    (new ImageService()).getPhotoRecords().then((res) => {
      setPhotoRecords(() => res as Photo[])
    }).catch((err)=>{
      console.error(err);
    });
    
  },[])

  return (
    <div className={styles.PhotosPage} data-testid="PhotosPage">
        {photoRecords.map((record) => (<PhotoCard photoModel={record}/>))}
    </div>
)};

export default PhotosPage;
