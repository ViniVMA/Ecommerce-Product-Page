import React, { ImgHTMLAttributes, useState } from "react"
import { Sneakers, ProductImages } from '../ProductDescription/Product/'
import * as S from './productGallery.style'



export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImages[0]);  
  const [isGalleryModalOpen, setGalleryModalOpen] = useState(false);

  const HandleOpenGalleryModal = () => {
    setGalleryModalOpen(true)
  }

  const HandleCloseGalleryModal = () => {
    setGalleryModalOpen(false)
  }


    return(
      <S.GalleryContainer>
        <img src={selectedImage.image}
         alt="Selected" 
         className="selected" 
         onClick={HandleOpenGalleryModal}
         />
        <div className="imageContainer">
          {ProductImages.map(({image}, index) =>(
            <img 
             key={index}
             src={image}
             className="imageThumb"
             onClick={() => setSelectedImage({image})}
             />
            
          ))}
        </div>
        <div>
          <S.FullscreenGallery isOpen={isGalleryModalOpen} onRequestClose={HandleCloseGalleryModal}>
            
              
                <img src={selectedImage.image}
                alt="Selected" 
                className="selected" 
                onClick={HandleOpenGalleryModal}
                />
                <div className="imageContainer">
                  {ProductImages.map(({image}, index) =>(
                    <img key={index}
                    src={image}
                    className="imageThumb"
                    onClick={() => setSelectedImage({image})}
                    />
                                 ))}
                    </div>
          </S.FullscreenGallery>
        </div>
      </S.GalleryContainer>

      
      
    )
}