import React, { ImgHTMLAttributes, useState } from "react"
import  { ProductImages } from './Images'
import * as S from './productGallery.style'

interface ProductImagesProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}




export const ProductGallery = ({
  image,
}: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(ProductImages[0]);  
    return(
      <S.GalleryContainer>
        <img src={selectedImage.image} alt="Selected" className="selected" />
        <div className="imageContainer">
          {ProductImages.map(({image}, index) =>(
            <img key={index}
             src={image}
             className="imageThumb"
             onClick={() => setSelectedImage({image})}
             />
            
          ))}
          
        </div>
        <div>
          
        </div>
      </S.GalleryContainer>
      
    )
}