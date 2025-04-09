import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        // file upload to cloudinary

        const result = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto',
        });

        // file uploaded successfully
        // console.log("File uploaded to cloudinary successfully",
        // response.url);
        
        fs.unlinkSync(localFilePath)
        // remove the local saved temporary file as the upload was successful

        return result;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove the local saved temporary file
        // as the upload failed
        return null;
    }
}

export  {uploadOnCloudinary};