import React from "react";
import * as S from "./productPage.style"
import { ProductDescription } from "../../components/ProductDescription"
import { ProductGallery }  from "../../components/ProductGallery"
import { ProductCounter } from "../../components/ProductCounter";




export const ProductPage = () => {
  return(
    <S.ProductPageContainer>
      <S.GalleryWrraper>
        <ProductGallery />
      </S.GalleryWrraper>
      <S.DescriptionWrapper>
       <ProductDescription />
       <ProductCounter />
      </S.DescriptionWrapper>
    </S.ProductPageContainer>
  )  
}