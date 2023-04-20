import axios from 'axios';
import React from 'react';
import Photo from '../models/Photo';

class ImageService {

    url:string = `${import.meta.env.VITE_BACKEND_URL}/photos`;


    getPhotoRecords = async ():Promise<Photo[]> => {
        const res = await axios.get<Photo[]>(`${this.url}/records`, {
            headers: {'Content-Type':'application/json'}
        })
        return res.data;
    }

    getPhotoBytes = async (photoKey:string):Promise<ArrayBuffer> => {
        const res = await axios.get<ArrayBuffer>(`${this.url}/files/${photoKey}`,
        {responseType:'arraybuffer'}
        )
        return res.data;
    }
}

export default ImageService;