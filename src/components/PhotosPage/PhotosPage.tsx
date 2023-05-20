import React, { FC } from 'react';
import styles from './PhotosPage.module.css';
import ImageService from '../../services/ImageService';
import Photo from '../../models/Photo';
import PhotoCard from '../PhotoCard/PhotoCard';
import PhotoCardExpanded from '../PhotoCardExpanded/PhotoCardExpanded'

interface PhotosPageProps {}
interface PhotoByteMap {
  [key:string]:ArrayBuffer,
}

const PhotosPage: FC<PhotosPageProps> = () => {
  
  
  const [photoRecords, setPhotoRecords] = React.useState<Photo[]>([]);
  const [photoFileMap, setPhotoFileMap] = React.useState<PhotoByteMap>({});
  const [expandedPhotoBytes, setExpandedPhotoBytes] = React.useState<ArrayBuffer>(new ArrayBuffer(0));

  React.useEffect(() => {

    const imageService = new ImageService();
    photoRecords.length ==0 && imageService.getPhotoRecords().then((res) => {
      setPhotoRecords(() => res as Photo[])
    }).catch((err)=>{
      console.error(err);
    });
    
   

    },[]);

    /* Once axios has fetched the records, it is necessary to fetch the bytes that corespond to each photo
      record, that is what this next use effect hook is for. I will probably look for a way to keep the bytes and
      the other information pertaining to the photos in the same structure in the future, but for now this is 
      a significant improvment, as before everytime a photo was maximized and minimized all of the photo files
      where being fetched from the api again.*/
    React.useEffect(() => {
      const imageService = new ImageService();
      for(let record of photoRecords) {

        imageService.getPhotoBytes(record.title)
      .then((res)=>{
        let byteArr = res as ArrayBuffer;
        setPhotoFileMap(prev => ({...prev,[record.title]:byteArr}));
      })
      .catch(err => console.error(err))
      }
    },[photoRecords])


  



  return ( expandedPhotoBytes.byteLength===0 ?
    (<div className={styles.PhotosPage} data-testid="PhotosPage">
        {photoRecords.map((record) => (<PhotoCard photoModel={record} photoBytes={photoFileMap[record.title]} setExpandedPhotoBytes={setExpandedPhotoBytes}/>))}
    </div> ) : (<PhotoCardExpanded expandedPhotoBytes={expandedPhotoBytes} setExpandedPhotoBytes={setExpandedPhotoBytes}/>)
  );
}

export default PhotosPage;
