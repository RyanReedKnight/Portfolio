import React, { FC } from 'react';
import styles from './PhotosPage.module.css';
import ImageService from '../../services/ImageService';
import Photo from '../../models/Photo';
import PhotoCard from '../PhotoCard/PhotoCard';
import PhotoCardExpanded from '../PhotoCardExpanded/PhotoCardExpanded'

interface PhotosPageProps {}

const PhotosPage: FC<PhotosPageProps> = () => {
  
  
  const [photoRecords, setPhotoRecords] = React.useState<Photo[]>([]);
  const [expandedPhotoBytes, setExpandedPhotoBytes] = React.useState<ArrayBuffer>(new ArrayBuffer(0));

  React.useEffect(() => {

    (new ImageService()).getPhotoRecords().then((res) => {
      setPhotoRecords(() => res as Photo[])
    }).catch((err)=>{
      console.error(err);
    });
    
  },[])



  return ( expandedPhotoBytes.byteLength===0 ?
    (<div className={styles.PhotosPage} data-testid="PhotosPage">
        {photoRecords.map((record) => (<PhotoCard photoModel={record} setExpandedPhotoBytes={setExpandedPhotoBytes}/>))}
    </div> ) : (<PhotoCardExpanded expandedPhotoBytes={expandedPhotoBytes} setExpandedPhotoBytes={setExpandedPhotoBytes}/>)
  );
}

export default PhotosPage;
