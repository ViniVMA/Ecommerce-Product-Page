import { ProductDescription } from "../../components/ProductDescription"
import { ProductGallery }  from "../../components/ProductGallery"
import * as S from "./productPage.style"
import React from "react";



export const ProductPage = () => {
  return(
    <S.ProductPageContainer>
      <S.GalleryWrraper>
        <ProductGallery />
      </S.GalleryWrraper>
      <S.DescriptionWrapper>
       <ProductDescription />
      </S.DescriptionWrapper>
    </S.ProductPageContainer>
  )  
}