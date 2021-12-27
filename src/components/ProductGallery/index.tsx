import React, { useState } from "react"
import  { ProductImages } from './Images'
import * as S from './productGallery.style'

interface ProductImagesProps extends HTMLAttributes<MouseEventHandler>{
  image: string;
}




export const ProductGallery = () => {
  
  const [selectedImage, setSelectedImage] = useState(ProductImages[0]);
  // console.log(ProductImages[0]);
  console.log(selectedImage);
  
    return(
      <S.GalleryContainer>
        <img src={selectedImage.image} alt="Selected" className="selected" />
        <div className="imageContainer">
          {ProductImages.map(({image}, index) =>(
            <img key={index}
             src={image}
             className="imageThumb"
             onClick={(image: ProductImagesProps) => setSelectedImage(image)}
             />
            
          ))}
          
        </div>
        <div>
          
        </div>
      </S.GalleryContainer>
      
    )
}