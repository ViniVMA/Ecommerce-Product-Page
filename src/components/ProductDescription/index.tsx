import { Price } from '../Price'
import * as S from './productDescription.style'
import { Sneakers } from './Product'



export const ProductDescription = () => {

 

    return(
      <S.Description>
        <h2>SNEAKER COMPANY</h2>
          <h1>{Sneakers.name}</h1>
          <S.Title>{Sneakers.description}</S.Title>
        <Price />
        
      </S.Description>
    )
}